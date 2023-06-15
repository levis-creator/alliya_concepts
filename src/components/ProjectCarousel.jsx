import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
//swiper css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { client } from "../../contentful/setup";
import ProjectSlide from "./ProjectSlide";

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const respond = await client
          .getEntries({
            content_type: "projects",
          })
          .then((data) => {
            setProjects(data.items);
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
        {console.log(projects)}
        {
          projects.map((items)=>(
            <SwiperSlide key={items.sys.id}>
            <ProjectSlide  data={items.fields}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default ProjectCarousel;
