type Props = {
  length: number;
};

const TestimonialSkeletonSwiper: React.FC<Props> = ({ length }) => (
  <div className="absolute top-[50%] left-[50%] -translate-[50%] flex gap-4 w-full h-[70%] px-2">
    {Array.from({ length }).map((_, i) => (
      <div
        key={`skeleton-slide-${i}`}
        className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] bg-white shadow-md rounded-xl p-4 h-full animate-pulse flex flex-col justify-between"
      >
        <div className="h-24 bg-gray-300 rounded mb-4" />
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    ))}
  </div>
);

export default TestimonialSkeletonSwiper;
