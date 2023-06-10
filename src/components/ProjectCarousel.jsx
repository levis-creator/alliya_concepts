import { Swiper, SwiperSlide,} from "swiper/react";
import { Autoplay} from 'swiper';
import img from "../assets/smartmockups_lipxksdq.jpg";
import img2 from "../assets/Screenshot 2023-06-09 at 17-49-46 Levis Nyingi.png";
//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ProjectCarousel = () => {
  return (
    <Swiper
    modules={[Autoplay]}
    className="mySwiper h-1/3 md:h-full"
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
      <div className="w-full h-full relative bg-green-500">
        <img src={img2} alt="project " className="h-full object-cover" />
        <div className="absolute bottom-0 right-0 mx-2">
          description
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
  )
}

export default ProjectCarousel
