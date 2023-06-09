import { Swiper, SwiperSlide,} from "swiper/react";
import { Autoplay} from 'swiper';
import img from "../assets/project2.png";
import img2 from "../assets/project1.png";
//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ProjectCarousel = () => {
  return (
    <Swiper
    modules={[Autoplay]}
    className="mySwiper h-1/3 "
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{
      clickable: true,
    }}
  >
    <SwiperSlide className="bg-rose-500">
      <div className="w-full h-full relative">
        <img src={img} alt="project " className="h-full object-cover" />
        <div className="absolute bottom-0 right-0 mx-2">
          description
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className="bg-rose-500">
      <div className="w-full h-full relative">
        <img
          src={img2}
          alt="project "
          className="h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 mx-2">
          description
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
  </Swiper>
  )
}

export default ProjectCarousel
