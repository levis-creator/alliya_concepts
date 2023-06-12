import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";
import img from "../assets/markus-spiske-1LLh8k2_YFk-unsplash.jpg";
import img2 from "../assets/tom-podmore-TwEhgfCWISA-unsplash.jpg";
import Carousel from "../components/Carousel";
import ImageComponent from "../components/ImageComponent";
import img3 from "../assets/altumcode-duEioBAh53s-unsplash.jpg";
import ApproachSteps from "../components/ApproachSteps";
const Services = () => {
  const services = [
    {
      title: "Web & app Development",
      steps: {
        step1:
          "Get in touch for your new website, custom web application, mobile app, or staffing.",
        step2: "We work to understand your needs and scope your project.",
        step3:
          "Kickoff the project with a technical brief, assign resources, and start coding.",
      },
      image: img,
    },
    {
      title: "Design & digital marketing",
      steps: {
        step1:
          "Get in touch for your new website, custom web application, mobile app, or staffing.",
        step2: "Contact us to discuss your brief and see examples.",
        step3:
          "Kickoff the design effort with strategic calls to finalize the brief and start designing.",
      },
      image: img3,
    },
  ];
  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="w-full  min-h-screen pt-10">
        <div className="md:h-screen md:relative ">
        <div className="md:w-3/6 md:absolute md:bottom-16">

        <h2 className="font-bold text-3xl px-7 md:text-6xl"> Our services</h2>
        <p className="text-2xl leading-relaxed p-7">
          {" "}
          Alliya Concepts is web development company that is focused in being
          your technical partner as you scale an giving your company the best
          user experience while making you company more visible.{" "}
        </p>
        </div>
        </div>
        {/* approach */}
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

        <div className=" bg-slate-50 md:px-0">
          {services.map((item, i)=>(
            <ApproachSteps key={i} data={item}/>
          ))}
        </div>
        <div className="space-y-4">
          <Carousel />
          <ContactButton />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
