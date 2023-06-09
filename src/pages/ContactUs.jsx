import Form from "../components/Form";

const ContactUs = () => {
  return (
    <div className="w-full  min-h-screen space-y-5  text-white ">
      <div className="  p-4 bg-black text-white py-14">
        <h3 className="font-bold text-3xl py-10">
          We'd love to<br></br>{" "}
          <span className="text-gray-400">work with you</span>
        </h3>
        <Form/>

      </div>
    </div>
  );
};

export default ContactUs;
