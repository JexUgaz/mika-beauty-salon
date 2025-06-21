import type { ShortVideoData } from "@/types/ShortVideoData";
import ShortsVideoCard from "./ShortsVideoCard";
import Carousel from "@/components/client/Carousel";
import CustomCarouselController from "./CustomCarouselController";
import { BreakPoints } from "@/types/BreakPoints";

interface Props {
  data: ShortVideoData[];
}

const CarouselShortsVideo: React.FC<Props> = ({ data }) => {
  const builder = (index: number) => <ShortsVideoCard data={data[index]} />;

  const nextButton = (onClick: () => void) => (
    <CustomCarouselController
      onClick={onClick}
      className="translate-y-5"
      iconClassName="rotate-270"
    />
  );
  const prevButton = (onClick: () => void) => (
    <CustomCarouselController
      onClick={onClick}
      className="-translate-y-25"
      iconClassName="rotate-90"
    />
  );

  return (
    <Carousel
      direction="vertical"
      builder={builder}
      length={data.length}
      spaceBetween={0}
      showArrows={true}
      responsiveViews={[1, 1]}
      responsiveBreakpoints={[BreakPoints["2MD"]]}
      className="h-full sm:w-[98%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] 3xl:w-[50%]"
      buildNextButton={nextButton}
      buildPrevButton={prevButton}
      showArrowsPerBreakpoint={(breakpoint) =>
        [BreakPoints["2MD"]].includes(breakpoint)
      }
      loop
      useVirtual
      mousewheel
    />
  );
};

export default CarouselShortsVideo;
