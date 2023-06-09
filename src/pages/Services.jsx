import TextCarousel from "../components/TextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
    <Helmet>
      <title>
        Services
      </title>
    </Helmet>
    <div className="w-full p-7 min-h-screen space-y-5 ">
      <h2 className="font-bold text-3xl "> 0ur services</h2>
      <p className="text-2xl leading-relaxed">
        {" "}
        Alliya Concepts is web development company that is focused in being your
        technical partner as you scale an giving your company the best user
        experience while making you company more visible.{" "}
      </p>
      <div className="space-y-5 bg-slate-50">
        <h3 className="font-bold text-3xl">Our Approach</h3>
        <div className="space-y-5">
          <h4 className="text-2xl font-bold">Web & app Development</h4>
          <h5 className="font-bold text-3xl text-purple-800">Step 1 </h5>
          <p className=" text-2xl leading-relaxed text-gray-800">
            Get in touch for your new website, custom web application, mobile
            app, or staffing.
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 2 </h5>
          <p className=" text-2xl leading-relaxed  text-gray-800">
            We work to understand your needs and scope your project.
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 3 </h5>
          <p className="text-2xl leading-relaxed text-gray-800">
            Kickoff the project with a technical brief, assign resources, and
            start coding.{" "}
          </p>
        </div>
        {/* design */}
        <div className="space-y-5">
          <h4 className="text-2xl font-bold">Design & digital marketing </h4>
          <h5 className="font-bold text-3xl text-purple-800">Step 1 </h5>
          <p className=" text-2xl leading-relaxed text-gray-800">
            Contact us to discuss your brief and see examples.
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 2 </h5>
          <p className=" text-2xl leading-relaxed text-gray-800">
            We talk internally with our creative director and designers to
            understand if we are good fit to help.{" "}
          </p>
          <h5 className="font-bold text-3xl text-purple-800">Step 3 </h5>
          <p className=" text-2xl leading-relaxedl text-gray-800">
            Kickoff the design effort with strategic calls to finalize the brief
            and start designing.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <TextCarousel />
        <ProjectCarousel />
        <ContactButton />
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Services;
