import { useEffect, useState } from "react";

const ProjectSlide = ({ data }) => {
  const [image, setImage] = useState();

  useEffect(() => {
    setImage(data.projectImage.fields.file.url);
  }, [data]);
  return (
    <a href={data.projectLink}>
      <div className="w-full h-full relative">
        <img
          src={image}
          alt="project "
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-0 right-0 mx-2 text-white text-xl font-medium capitalize">
          {data.projectName}
        </div>
      </div>
    </a>
  );
};

export default ProjectSlide;
