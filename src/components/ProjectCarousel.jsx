import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { client } from "../../contentful/setup";
import ProjectSlide from "./ProjectSlide";
import usePagesHook from "../hook/usePagesHook";
import { FETCHPROJECTS } from "../constants/constants";

const ProjectCarousel = () => {
  const { projects, dispatch } = usePagesHook();
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const respond = await client
          .getEntries({
            content_type: "projects",
          })
          .then((data) => {
            dispatch({type: FETCHPROJECTS, payload:data.items})
          });
        return respond;
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  return (
    <div className="px-7 md:px-0 md:h-full">
      <Swiper
        modules={[Autoplay]}
        className="mySwiper h-1/3 md:h-full bg-black"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
      >
        {projects.map((items) => (
          <SwiperSlide key={items.sys.id}>
            <ProjectSlide data={items.fields} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
