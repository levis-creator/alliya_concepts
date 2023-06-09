import { Link } from "react-router-dom";
import TextCarousel from "../components/TextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full p-4 min-h-screen ">
      <div className="w-full ">
        <TextCarousel />
        <div className=" w-full h-full project ">
          <ProjectCarousel />
        </div>
      </div>

      <div className="space-y-5 leading-relaxed pt-8">
        <h2 className=" text-3xl font-bold"> The best for the best</h2>
        <p className="text-2xl">
          We are a company that focuses on growing you and your business through
          the best designs and developing websites and applications for you
        </p>
        <Link to="/services">
          <button className="text-xl bg-purple-700 text-white px-20 py-4 w-full mt-10">
            Our Services
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
