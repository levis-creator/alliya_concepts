import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel";
import ApproachSteps from "../components/ApproachSteps";
import { useEffect, useState } from "react";
import { FETCHSERVICES } from "../constants/constants";
import { client } from "../../contentful/setup";
import usePagesHook from "../hook/usePagesHook";
const Services = () => {
  const { service, dispatch } = usePagesHook();
  const [steps, setSteps]=useState([])
  const [bgImage, setBgImage]=useState()
  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await client.getEntries({
          content_type: "servicesPage",
        }).then((data)=>{
          dispatch({ type: FETCHSERVICES, payload: data.items[0].fields});
          setBgImage(data.items[0].fields.approachBackground.fields.file.url)
          setSteps(data.items[0].fields.services)
        })
        return response
      } catch (error) {
        console.log(error);
      }
    };
    fetchService();
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div className="w-full  min-h-screen pt-20 md:pt-0">
        <section className="md:h-screen md:relative md:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="md:w-3/6 md:absolute md:bottom-16">

        <h2 className="font-bold text-3xl px-7 md:text-6xl md:text-white"> Our services</h2>
        <p className="text-2xl leading-relaxed p-7 md:text-white">
          {" "}
          {service.servicesDescription}
        </p>
        </div>
        </section>
        {/* approach */}
        <div className="h-60 w-full relative flex items-end">
          <div className="w-full h-full absolute -z-50">
            <div className="relative w-full h-full">
              <div className="absolute bg-black top-0 bottom-0 right-0 left-0 bg-opacity-60"></div>
              <img src={bgImage} alt="" className="w-full h-full object-cover " />
            </div>
          </div>
          <h3 className="font-bold text-3xl text-white my-10 p-7 ">
            Our Approach
          </h3>
        </div>

        <div className=" bg-slate-50 md:px-0">
          {steps.map((item, i)=>(
            <ApproachSteps key={i} data={item.fields}/>
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
