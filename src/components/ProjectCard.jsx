import img from "../assets/smartmockups_lipxksdq.jpg";

const ProjectCard = () => {
  return (
    <div className="md:relative">
      <div className="md:h-80">
        <img src={img} alt="project name" className="md:h-full object-cover" />
      </div>
      <div className="md:absolute md:z-50 md:bottom-5 md:left-5 md:text-white md:text-2xl md:font-bold">name of the project</div>
    </div>
  );
};

export default ProjectCard;
