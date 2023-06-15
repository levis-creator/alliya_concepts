import ProjectCarousel from "./ProjectCarousel";
import TextCarousel from "./TextCarousel";

const Carousel = () => {
  return (
    <div>
      <div className="w-full md:max-h-screen relative ">
        <div className="md:absolute md:z-50 md:bottom-16 md:p-7">
          <TextCarousel />
        </div>
        <div className=" w-full  project md:h-screen md:relative">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
