import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
const CaseStudy = () => {
  return (
    <>
    <Helmet>
      <title>
        Case study
      </title>
    </Helmet>
    <div className="w-full px-5 pt-5">
      <h3 className="text-2xl font-bold">All Projects</h3>
      <div className="flex flex-col gap-3">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
    </>
  );
};

export default CaseStudy;
