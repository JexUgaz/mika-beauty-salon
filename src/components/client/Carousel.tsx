import { useRef, useState } from "react";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Autoplay, Mousewheel, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowIcon from "./icons/ArrowIcon";
import type { SwiperModule } from "swiper/types";
import type { BreakPoints } from "@/types/BreakPoints";

interface Props {
  direction?: "horizontal" | "vertical";
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
  mousewheel?: boolean;
  showOverflow?: boolean;
  useVirtual?: boolean;
  prevButtonClass?: string;
  nextButtonClass?: string;
  buildPrevButton?: (onClick: () => void, index: number) => React.ReactNode;
  buildNextButton?: (onClick: () => void, index: number) => React.ReactNode;
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
  useVirtual,
  direction = "horizontal",
  spaceBetween = 20,
  responsiveBreakpoints = [],
  responsiveViews = [1],
  loop = true,
  mousewheel = false,
  autoplay = false,
  className = "w-[550px] h-[600px]",
  autoplayDelay = 3000,
  showArrows = false,
  prevButtonClass = "-left-20 text-mika-primary",
  nextButtonClass = "-right-20 text-mika-primary",
  showArrowsPerBreakpoint,
  autoplayPerBreakpoint,
  buildPrevButton,
  buildNextButton,
  showOverflow = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showArrowsByBreakpoint, setShowArrowsByBreakpoint] =
    useState(showArrows);
  const [autoplayByBreakpoint, setAutoplayByBreakpoint] = useState(autoplay);
  const swiperRef = useRef<SwiperClass | null>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  const modules: SwiperModule[] = [];
  if (autoplayByBreakpoint) modules.push(Autoplay);
  if (mousewheel) modules.push(Mousewheel);
  if (useVirtual) modules.push(Virtual);

  const breakpoints = buildSwiperBreakpoints(
    responsiveBreakpoints,
    responsiveViews
  );

  const isVertical = direction === "vertical";

  const prevButtonClassName = isVertical
    ? `absolute top-1/2 ${prevButtonClass}`
    : `absolute top-1/2 -translate-y-1/2 ${prevButtonClass}`;
  const nextButtonClassName = isVertical
    ? `absolute top-1/2 ${nextButtonClass}`
    : `absolute top-1/2 -translate-y-1/2 ${nextButtonClass}`;

  const prevIconRotation = isVertical ? "rotate-90" : "rotate-0";
  const nextIconRotation = isVertical ? "rotate-270" : "rotate-180";

  return (
    <div className={`relative ${className}`}>
      <Swiper
        key={`carousel-${autoplayByBreakpoint}`}
        style={{ overflow: showOverflow ? "visible" : "hidden" }}
        direction={direction}
        spaceBetween={spaceBetween}
        modules={modules}
        mousewheel={mousewheel}
        breakpoints={breakpoints}
        loop={loop}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
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
            virtualIndex={i}
            className="w-full h-full flex content-center"
          >
            {builder(i)}
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrowsByBreakpoint && (
        <>
          {buildPrevButton ? (
            buildPrevButton(handlePrev, activeIndex)
          ) : (
            <button
              onClick={handlePrev}
              className={`z-10 cursor-pointer ${prevButtonClassName}`}
            >
              <ArrowIcon className={`size-20 ${prevIconRotation}`} />
            </button>
          )}

          {buildNextButton ? (
            buildNextButton(handleNext, activeIndex)
          ) : (
            <button
              onClick={handleNext}
              className={`z-10 cursor-pointer ${nextButtonClassName}`}
            >
              <ArrowIcon className={`size-20 ${nextIconRotation}`} />
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Carousel;
