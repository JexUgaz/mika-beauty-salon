import { useRef, useState } from "react";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowIcon from "./icons/ArrowIcon";
import type { SwiperModule } from "swiper/types";
import type { BreakPoints } from "@/types/BreakPoints";

interface Props {
  spaceBetween?: number;
  autoplay?: boolean;
  loop?: boolean;
  length: number;
  responsiveBreakpoints?: BreakPoints[];
  responsiveViews?: number[];
  builder: (index: number) => React.ReactNode;
  showArrowsPerBreakpoint?: (breakpoint: number) => boolean;
  autoplayPerBreakpoint?: (breakpoint: number) => boolean;
  className?: string;
  autoplayDelay?: number;
  showArrows?: boolean;
  prevButtonClass?: string;
  nextButtonClass?: string;
}

const buildSwiperBreakpoints = (
  bps: number[],
  views: number[]
): Record<number, { slidesPerView: number }> => {
  if (views.length !== bps.length + 1) {
    throw new Error(
      `[Carousel] The number of slidesPerView values must be exactly one more than the number of breakpoints.\n` +
        `Received: breakpoints(${bps.length}) -> slidesPerView(${views.length})`
    );
  }

  const breakpoints: Record<number, { slidesPerView: number }> = {
    0: { slidesPerView: views[0] },
  };
  bps.forEach((bp, i) => {
    breakpoints[bp] = { slidesPerView: views[i + 1] };
  });
  return breakpoints;
};

const Carousel: React.FC<Props> = ({
  length,
  builder,
  spaceBetween = 20,
  responsiveBreakpoints = [],
  responsiveViews = [1],
  loop = true,
  autoplay = false,
  className = "w-[550px] h-[600px]",
  autoplayDelay = 3000,
  showArrows = false,
  prevButtonClass = "-left-20",
  nextButtonClass = "-right-20",
  showArrowsPerBreakpoint,
  autoplayPerBreakpoint,
}) => {
  const [showArrowsByBreakpoint, setShowArrowsByBreakpoint] =
    useState(showArrows);
  const [autoplayByBreakpoint, setAutoplayByBreakpoint] = useState(autoplay);
  const swiperRef = useRef<SwiperClass | null>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  const modules: SwiperModule[] = [];
  if (autoplayByBreakpoint) modules.push(Autoplay);

  const breakpoints = buildSwiperBreakpoints(
    responsiveBreakpoints,
    responsiveViews
  );

  return (
    <div className={`relative ${className}`}>
      <Swiper
        key={`carousel-${autoplayByBreakpoint}`}
        spaceBetween={spaceBetween}
        modules={modules}
        breakpoints={breakpoints}
        loop={loop}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="rounded-lg w-full h-full"
        onBreakpoint={(swiper, _) => {
          const breakPoint = Number(swiper.currentBreakpoint);
          if (showArrowsPerBreakpoint) {
            setShowArrowsByBreakpoint(showArrowsPerBreakpoint(breakPoint));
          }
          if (autoplayPerBreakpoint) {
            setAutoplayByBreakpoint(autoplayPerBreakpoint(breakPoint));
          }
        }}
      >
        {Array.from({ length }).map((_, i) => (
          <SwiperSlide
            key={`slide-${i}`}
            className="w-full h-full flex content-center"
          >
            {builder(i)}
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrowsByBreakpoint && (
        <>
          <button
            onClick={handlePrev}
            className={`absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer ${prevButtonClass}`}
          >
            <ArrowIcon className="size-20 text-mika-primary" />
          </button>
          <button
            onClick={handleNext}
            className={`absolute top-1/2 -translate-y-1/2 z-10 cursor-pointer ${nextButtonClass}`}
          >
            <ArrowIcon className="size-20 text-mika-primary rotate-180" />
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
