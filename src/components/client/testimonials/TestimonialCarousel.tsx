import Carousel from "@/components/client/Carousel";
import TestimonialCard from "./TestimonialCard";
import type { TestimonialData } from "@/types/TestimonialData";
import { BreakPoints } from "@/types/BreakPoints";
import { useRef, useState } from "react";
import TestimonialModal from "./TestimonialModal";

interface Props {
  data: TestimonialData[];
}

const TestimonialCarousel: React.FC<Props> = ({ data }) => {
  const [itemSelected, setItemSelected] = useState<TestimonialData | null>(
    null
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = (item: TestimonialData) => {
    setItemSelected(item);
    dialogRef.current?.showModal();
  };
  const closeModal = () => dialogRef.current?.close();

  const builder = (i: number) => {
    const item = data[i];
    return <TestimonialCard item={item} onClick={() => openModal(item)} />;
  };

  return (
    <>
      <Carousel
        className="flex justify-center h-[70%] w-full xs:w-[70%] sm:mt-5 sm:w-full 3xl:mt-10 3xl:h-[60%]"
        builder={builder}
        length={data.length}
        responsiveViews={[1, 2, 3]}
        responsiveBreakpoints={[BreakPoints.SM, BreakPoints.LG]}
        showArrowsPerBreakpoint={(breakPoint) =>
          [BreakPoints.ZERO, BreakPoints.SM].includes(breakPoint)
        }
        autoplayPerBreakpoint={(breakPoint) =>
          [BreakPoints.ZERO, BreakPoints.SM].includes(breakPoint)
        }
        prevButtonClass="-left-8 text-mika-primary"
        nextButtonClass="-right-8 text-mika-primary"
        showOverflow
      />
      <TestimonialModal
        ref={dialogRef}
        onClose={closeModal}
        item={itemSelected}
      />
    </>
  );
};

export default TestimonialCarousel;
