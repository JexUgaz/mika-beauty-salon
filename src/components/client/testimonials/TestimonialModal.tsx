import type { TestimonialData } from "@/types/TestimonialData";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import TestimonialModalOverlay from "./TestimonialModalOverlay";

interface Props {
  ref: React.Ref<HTMLDialogElement>;
  item: TestimonialData | null;
  onClose: () => void;
}

const dataPlaceholder: TestimonialData = {
  description: "",
  image: "",
  name: "",
};

const TestimonialModal: React.FC<Props> = ({ onClose, item, ref }) => {
  const [showText, setShowText] = useState(true);

  const { image: src, name, description: content } = item ?? dataPlaceholder;

  return (
    <dialog ref={ref} onCancel={onClose}>
      <div className="fixed w-[100dvw] h-[100dvh] bg-black/50 bg-opacity-70 flex justify-center items-center">
        <div className="relative rounded-xl max-w-full min-w-[40%] mx-2 overflow-hidden">
          <img
            src={src}
            alt=""
            className="w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />

          <TestimonialModalOverlay
            content={content}
            name={name}
            visible={showText}
          />

          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-20 text-white text-2xl font-bold bg-black/60 hover:bg-black/80 px-3 py-1 cursor-pointer rounded-xl"
          >
            &times;
          </button>

          <button
            onClick={() => setShowText(!showText)}
            className="absolute bottom-4 left-[50%] -translate-x-[50%] z-20 text-sm px-3 py-1 rounded bg-black/80 cursor-pointer text-white shadow"
          >
            {showText ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <ChevronUp className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default TestimonialModal;
