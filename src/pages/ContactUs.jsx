import { Helmet } from "react-helmet-async";
import Form from "../components/Form";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <div className="w-full  min-h-screen space-y-5  text-white ">
        <div className="  p-7 bg-black text-white py-14 md:flex md:justify-center">
          <div className="md:w-96 md:bg-white md:text-black md:p-5">
            <h3 className="font-bold text-3xl py-10">
              We'd love to<br></br>{" "}
              <span className="text-gray-400">work with you</span>
            </h3>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
