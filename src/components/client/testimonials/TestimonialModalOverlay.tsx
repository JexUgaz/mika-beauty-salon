import { AnimatePresence, motion } from "framer-motion";

interface Props {
  visible: boolean;
  content: string;
  name: string;
}

const TestimonialModalOverlay: React.FC<Props> = ({
  visible,
  name,
  content,
}) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-6 flex flex-col justify-end rounded-xl text-sm xs:text-base md:text-lg"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="overflow-y-auto max-h-[200px] text-justify scrollbar-thin-white"
        >
          "{content}"
        </motion.p>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-right"
        >
          - {name}
        </motion.span>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TestimonialModalOverlay;
