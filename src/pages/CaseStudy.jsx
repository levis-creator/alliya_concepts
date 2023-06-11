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
      <div className="w-full px-5 pt-5 md:px-0">
        <h3 className="text-2xl font-bold">All Projects</h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-0">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="md:p-7">
          <ContactButton />
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default CaseStudy;
