interface Props {
  src: string;
  alt: string;
  title: string;
  className: string;
}

const TestimonialCard: React.FC<Props> = ({ src, alt, title, className }) => (
  <div
    className={`bg-white rounded-xl shadow-md flex flex-col justify-center items-center p-4 ${className}`}
  >
    <div className="flex flex-col justify-center items-center">
      <div
        className="w-[90%] overflow-hidden rounded-2xl  
          xl:h-40 2xl:h-50 3xl:h-60"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <h2 className="mt-4 text-lg font-semibold text-gray-800 2xl:text-xl">
        {title}
      </h2>
    </div>
    <button
      className="uppercase cursor-pointer font-bold mt-4 px-4 py-2 bg-mika-primary text-white rounded-lg text-base
            hover:bg-mika-primary/80 transform hover:scale-110 active:scale-95 transition duration-300 ease-in-out
            2xl:text-lg"
    >
      Ver Entrevista
    </button>
  </div>
);

export default TestimonialCard;
