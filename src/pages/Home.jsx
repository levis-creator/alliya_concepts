import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div className="w-full pt-20 min-h-screen relative md:px-0 md:pt-0">
        <Carousel />
        <div className="space-y-5 leading-relaxed pt-8 px-7 md:w-5/6">
          <h2 className=" text-3xl font-bold lg:text-6xl">
            {" "}
            The best for the best
          </h2>
          <p className="text-2xl lg:text-3xl ">
            We are a company that focuses on growing you and your business
            through the best designs and developing websites and applications
            for you
          </p>
          <Link to="/services">
            <button className="text-xl bg-purple-700 text-white px-20 py-4 w-full mt-10 md:w-fit md:text-3xl font-semibold md:px-10 md:mt-4">
              Our services
            </button>
          </Link>
        </div>
        <ContactButton />
        <Footer />
      </div>
    </>
  );
};

export default Home;
