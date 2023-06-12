import { Helmet } from "react-helmet-async";
import ProjectCard from "../components/ProjectCard";
import ContactButton from "../components/ContactButton";
import Footer from "../components/Footer";
const CaseStudy = () => {
  return (
    <>
      <Helmet>
        <title>Case study</title>
      </Helmet>
      <div className="w-full pt-5 md:pt-16">
        <div className="p-7 md:w-5/6 ">
          <h3 className="text-2xl font-bold lg:text-3xl">All Projects</h3>
          <p className="text-2xl lg:text-3xl">This are some of the projects and samples we've completed</p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-0 px-7 md:px-0 md:w-full">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="">
          <ContactButton />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
