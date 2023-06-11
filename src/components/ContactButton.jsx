import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <div className="md:p-7">
      <p className="text-4xl font-black leading-relaxed w-3/4">
        Our office is based in Kenya and Our Services are available world wide.{" "}
      </p>

      <Link to="/contact-us">
        <button
          className="text-xl bg-purple-700 text-white px-20 py-4 w-full mt-10 md:w-44 md:text-3xl font-semibold
           md:px-0 md:mt-4"
        >
          Let's Talk
        </button>
      </Link>
    </div>
  );
};

export default ContactButton;
