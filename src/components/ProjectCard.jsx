import { useEffect, useState } from "react";
import img from "../assets/smartmockups_lipxksdq.jpg";

const ProjectCard = ({ data }) => {
  const [image, setImage]=useState()
  useEffect(()=>{
    setImage(data.projectImage.fields.file.url)
  },[data])
  return (
    <a href={data.projectLink}>

    <div className="md:relative w-full">
      <div className="md:h-80 w-full">
        <img src={image} alt="project name" className="md:h-full w-full object-cover" />
      </div>
      <div className="md:absolute md:z-50 md:bottom-5 md:left-5 md:text-white md:text-2xl md:font-bold">{data.projectName}</div>
    </div>
    </a>
  );
};

export default ProjectCard;
