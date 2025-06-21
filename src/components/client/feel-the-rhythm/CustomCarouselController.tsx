import { AnimatePresence, motion } from "framer-motion";
import VideoSwiperArrowIcon from "../icons/VideoSwiperArrowIcon";
interface Props {
  show: boolean;
  onClick: () => void;
  type: "to-top" | "to-bottom";
}

const CustomCarouselController: React.FC<Props> = ({ onClick, show, type }) => {
  const toTop = type === "to-top";
  const className = toTop
    ? "-translate-y-50 2md:-translate-y-25"
    : "-translate-y-30 2md:-translate-y-5";
  const iconClassName = toTop ? "" : "rotate-180";

  const animationOffset = toTop ? 20 : -20;

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={onClick}
          initial={{ opacity: 0, y: animationOffset }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: animationOffset }}
          transition={{ duration: 0.3 }}
          className={`z-10 cursor-pointer absolute top-1/2 right-0 2md:right-10 text-white ${className} hover:scale-110 active:scale-95`}
        >
          <div className="rounded-full bg-black/50 hover:bg-white/10 transition duration-200 p-2">
            <VideoSwiperArrowIcon
              className={`text-white ${iconClassName} size-10`}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default CustomCarouselController;
