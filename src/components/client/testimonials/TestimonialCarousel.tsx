import Carousel from "@/components/client/Carousel";
import TestimonialCard from "./TestimonialCard";
import type { TestimonialData } from "@/types/TestimonialData";
import { BreakPoints } from "@/types/BreakPoints";

interface Props {
  data: TestimonialData[];
}

const TestimonialCarousel: React.FC<Props> = ({ data }) => {
  const builder = (i: number) => {
    const item = data[i];
    return <TestimonialCard alt="" src={item.image} title={item.name} />;
  };
  return (
    <Carousel
      className="flex justify-center h-[70%] w-full xs:w-[70%] sm:mt-5 sm:w-full 3xl:mt-10 3xl:h-[60%]"
      builder={builder}
      length={data.length}
      responsiveViews={[1, 2, 3]}
      responsiveBreakpoints={[BreakPoints.SM, BreakPoints.LG]}
      showArrowsPerBreakpoint={(breakPoint) =>
        [BreakPoints.ZERO, BreakPoints.SM].includes(breakPoint)
      }
      autoplayPerBreakpoint={(breakPoint) =>
        [BreakPoints.ZERO, BreakPoints.SM].includes(breakPoint)
      }
      prevButtonClass="-left-8 text-mika-primary"
      nextButtonClass="-right-8 text-mika-primary"
      showOverflow
    />
  );
};

export default TestimonialCarousel;
