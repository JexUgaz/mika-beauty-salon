import type { TestimonialData } from "@/types/TestimonialData";

interface Props {
  item: TestimonialData;
  onClick: () => void;
}

const TestimonialCard: React.FC<Props> = ({ item, onClick }) => {
  const { image: src, name: title } = item;

  return (
    <div
      className={`bg-white rounded-xl shadow-md flex flex-col justify-center items-center p-4 justify-self-center w-full gap-y-9 
        sm:h-[85%]
        hover:scale-110 transition duration-400 ease-in-out overflow-hidden`}
    >
      <div className="flex flex-col justify-center items-center">
        <div
          className="w-[90%] overflow-hidden rounded-2xl
          xl:h-40 2xl:h-50 3xl:h-60"
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
        <h2 className="mt-4 text-lg font-semibold text-gray-800 2xl:text-xl">
          {title}
        </h2>
      </div>
      <button
        onClick={onClick}
        className="uppercase cursor-pointer font-bold mt-4 px-10 py-2 bg-mika-primary text-white rounded-lg text-base
            hover:bg-mika-primary/80 transform hover:scale-110 active:scale-95 transition duration-300 ease-in-out
            2xl:text-lg"
      >
        Leer
      </button>
    </div>
  );
};

export default TestimonialCard;
