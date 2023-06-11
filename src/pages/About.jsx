import img from "../assets/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <div className="p-7 flex flex-col gap-4 md:px-0">
        <div className="md:p-7">

        <h3 className="font-bold text-3xl">About us</h3>
        <div>
          <img src={img} />
        </div>
        </div>
        <div className="flex flex-col gap-7 md:p-7">
          <p className="text-2xl text-justify leading-relaxed">
            We are Tech company dedicated to make your brand more visible,
            through Our Team of Professionals.
          </p>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-3xl">Why hire us?</h3>
            <p className="text-2xl leading-relaxed">
              We offer the best Services and products customized to your needs
              and unlike other companys we offer unlimited customer support.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-3xl">Our team</h3>
            <p className="text-2xl leading-relaxed">
              We have a team of Qualified professions who will work together
              with you to offer you products and services just tailored for you.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <Carousel/>
          <ContactButton />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
