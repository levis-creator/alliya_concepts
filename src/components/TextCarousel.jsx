import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from 'swiper';


// swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";


const TextCarousel = () => {
    const items = [
        "websites",
        "custom applications",
        "new brands",
        "digital campaigns",
        "mobile apps",
      ];
  return (
    <div className="space-y-2 text-carousel py-6 ">
    <p className="font-extrabold text-3xl ">We build </p>
    <Swiper
    modules={[Autoplay]}
      direction={"vertical"}
      centeredSlides={true}
      slidesPerView={2}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      draggable={false}
      loop={true}
      className="mySwiper"
    >
      {items.map((item, i) => (
        <SwiperSlide className=" text-3xl font-extrabold" key={i}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default TextCarousel
