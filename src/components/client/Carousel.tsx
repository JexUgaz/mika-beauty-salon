import { useRef } from "react";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ArrowIcon from "./icons/ArrowIcon";

interface Props {
  images: string[];
  className?: string;
  autoplayDelay?: number;
  showArrows?: boolean;
  prevButtonClass?: string;
  nextButtonClass?: string;
}

const Carousel: React.FC<Props> = ({
  images,
  className = "w-[550px] h-[600px]",
  autoplayDelay = 3000,
  showArrows = true,
  prevButtonClass = "-left-20",
  nextButtonClass = "-right-20",
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const handleNext = () => swiperRef.current?.slideNext();
  const handlePrev = () => swiperRef.current?.slidePrev();

  return (
    <div className={`relative ${className}`}>
      <Swiper
        spaceBetween={20}
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="rounded-lg shadow-md w-full h-full"
      >
        {images.map((i) => (
          <SwiperSlide key={i} className="w-full h-full">
            <img
              src={i}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrows && (
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
