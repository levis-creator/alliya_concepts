import img from "../assets/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import ImageComponent from "../components/ImageComponent";
import img2 from "../assets/altumcode-duEioBAh53s-unsplash.jpg"

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="flex flex-col md:pt-16">
        <div className="px-7 md:relative md:px-0">
          <h3 className="font-bold text-3xl md:text-6xl md:absolute md:z-50 md:text-white md:bottom-12 md:left-7
          ">About us</h3>
          <div className=" overflow-hidden md:relative">
            <div className="hidden md:block md:absolute md:bg-black top-0 bottom-0 right-0 left-0 z-30 md:bg-opacity-50"></div>
            <img src={img} className="h-96 w-full object-cover"/>
          </div>
        </div>
        <div className="md:flex">

        <div className="flex flex-col gap-7 p-7 ">
          <p className="text-2xl text-justify leading-relaxed md:text-3xl lg:w-5/6">
            We are Tech company dedicated to make your brand more visible,
            through Our Team of Professionals.
          </p>
          <div className="flex flex-col gap-2 w-5/6">
            <h3 className="font-semibold text-3xl  md:text-4xl">
              Why hire us?
            </h3>
            <p className="text-2xl leading-relaxed md:text-3xl">
              We offer the best Services and products customized to your needs
              and unlike other companys we offer unlimited customer support.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-5/6">
            <h3 className="font-semibold text-3xl md:text-4xl">
              Our team
            </h3>
            <p className="text-2xl leading-relaxed md:text-3xl">
              We have a team of Qualified professions who will work together
              with you to offer you products and services just tailored for you.
            </p>
          </div>
        </div>
       

        <ImageComponent img={img2}/>
        </div>
      </div>
      <div className="space-y-4">
        <Carousel />
        <ContactButton />
      </div>
      <Footer />
    </>
  );
};

export default About;
