import TextCarousel from "../components/TextCarousel";
import ProjectCarousel from "../components/ProjectCarousel";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";
import img from "../assets/markus-spiske-1LLh8k2_YFk-unsplash.jpg";
import img2 from "../assets/tom-podmore-TwEhgfCWISA-unsplash.jpg";
import Carousel from "../components/Carousel";
const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="w-full  min-h-screen md:p-0">
        <h2 className="font-bold text-3xl "> Our services</h2>
        <p className="text-2xl leading-relaxed p-7">
          {" "}
          Alliya Concepts is web development company that is focused in being
          your technical partner as you scale an giving your company the best
          user experience while making you company more visible.{" "}
        </p>
        <div className="h-60 w-full relative flex items-end">
          <div className="w-full h-full absolute -z-50">
            <div className="relative w-full h-full">
              <div className="absolute bg-black top-0 bottom-0 right-0 left-0 bg-opacity-60"></div>
              <img src={img2} alt="" className="w-full h-full object-cover " />
            </div>
          </div>
          <h3 className="font-bold text-3xl text-white my-10 p-7 ">
            Our Approach
          </h3>
        </div>
        <div className=" bg-slate-50">
          <div className="flex flex-row-reverse h-fit">
            <div className="w-5/6 max-h-full relative hidden md:block">
              <div className="bg-purple-900 absolute top-0 bottom-0 right-0 left-0 bg-opacity-60"></div>
              <img src={img} alt="" className="h-full object-cover" />
            </div>
            <div className="md:px-7 flex flex-col gap-8">
              <div className="space-y-5 ">
                <h4 className="text-2xl font-bold">Web & app Development</h4>
                <h5 className="font-bold text-3xl text-purple-800">Step 1 </h5>
                <p className=" text-2xl leading-relaxed text-gray-800">
                  Get in touch for your new website, custom web application,
                  mobile app, or staffing.
                </p>
                <h5 className="font-bold text-3xl text-purple-800">Step 2 </h5>
                <p className=" text-2xl leading-relaxed  text-gray-800">
                  We work to understand your needs and scope your project.
                </p>
                <h5 className="font-bold text-3xl text-purple-800">Step 3 </h5>
                <p className="text-2xl leading-relaxed text-gray-800">
                  Kickoff the project with a technical brief, assign resources,
                  and start coding.{" "}
                </p>
              </div>
            </div>
          </div>
              {/* design */}
              <div className="space-y-5">
                <h4 className="text-2xl font-bold">
                  Design & digital marketing{" "}
                </h4>
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
                  Kickoff the design effort with strategic calls to finalize the
                  brief and start designing.
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

export default Services;
