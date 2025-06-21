import type { ShortVideoData } from "@/types/ShortVideoData";
import ShortsVideoCard from "./ShortsVideoCard";
import Carousel from "@/components/client/Carousel";
import { BreakPoints } from "@/types/BreakPoints";
import { useIsTouchVideoRestricted } from "@/utils/client/hooks/useIsTouchVideoRestricted";
import CustomCarouselController from "./CustomCarouselController";

interface Props {
  data: ShortVideoData[];
}

const CarouselShortsVideo: React.FC<Props> = ({ data }) => {
  const isTouchVideoRestricted = useIsTouchVideoRestricted();
  const builder = (index: number) => <ShortsVideoCard data={data[index]} />;

  const prevButton = (onClick: () => void, index: number) => (
    <CustomCarouselController
      onClick={onClick}
      show={index !== 0}
      type="to-top"
    />
  );

  const nextButton = (onClick: () => void, index: number) => (
    <CustomCarouselController
      onClick={onClick}
      show={index !== data.length - 1}
      type="to-bottom"
    />
  );

  return (
    <Carousel
      key={`carousel-${isTouchVideoRestricted}`}
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
        [BreakPoints["2MD"]].includes(breakpoint) || isTouchVideoRestricted
      }
      loop={false}
      useVirtual
      mousewheel
    />
  );
};

export default CarouselShortsVideo;
