import Carousel from "@/components/client/Carousel";

interface Props {
  images: string[];
}

const AboutCarousel: React.FC<Props> = ({ images }) => {
  const builder = (i: number) => (
    <img
      src={images[i]}
      alt={`Slide ${i}`}
      className="w-full h-full object-cover rounded-lg"
    />
  );

  return (
    <Carousel
      builder={builder}
      length={images.length}
      className="w-[300px] h-[300px] mt-20 mb-5 xl:my-0 xl:w-[400px] xl:h-[450px] 2xl:w-[500px] 2xl:h-[550px] 3xl:w-[600px] 3xl:h-[650px]"
      prevButtonClass="-left-15 sm:-left-20 text-mika-primary"
      nextButtonClass="-right-15 sm:-right-20 text-mika-primary"
      showArrows={true}
      autoplay={true}
      responsiveViews={[1]}
    />
  );
};

export default AboutCarousel;
