import ArrowIcon from "@/components/client/icons/ArrowIcon";
interface Props {
  onClick: () => void;
  className?: string;
  iconClassName?: string;
}

const CustomCarouselController: React.FC<Props> = ({
  onClick,
  className,
  iconClassName,
}) => (
  <button
    onClick={onClick}
    className={`z-10 cursor-pointer absolute top-1/2 text-white right-10 ${className} hover:scale-110 active:scale-95`}
  >
    <div className="rounded-2xl bg-black/50 hover:bg-white/10 transition duration-200">
      <ArrowIcon className={`size-20 text-white ${iconClassName}`} />
    </div>
  </button>
);

export default CustomCarouselController;
