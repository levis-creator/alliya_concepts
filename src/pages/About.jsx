import Underdevelopment from "../components/Underdevelopment";
import img from "../assets/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg";
import Services from "./Services";
import TextCarousel from "../components/TextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
const About = () => {
  return (
    <div className="px-5 pt-5 flex flex-col gap-4">
      <h3 className="font-bold text-3xl">About us</h3>
      <div>
        <img src={img} />
      </div>
      <p className="text-xl text-justify">
        We are Tech company dedicated to make your brand more visible, through
        Our Team of Professionals.
      </p>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-3xl">Why hire us?</h3>
        <p className="text-xl">
          We offer the best Services and products customized to your needs and
          unlike other companys we offer unlimited customer support.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-3xl">Our team</h3>
        <p className="text-xl">
          We have a team of Qualified professions who will work together with
          you to offer you products and services just tailored for you.
        </p>
      </div>
      <div className="space-y-4">
        <TextCarousel />
        <ProjectCarousel />
        <ContactButton />
      </div>
      <Footer/>
    </div>
  );
};

export default About;
