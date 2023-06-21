import emailjs from "@emailjs/browser";
import { useState } from "react";
import validator from "validator";

const Form = () => {
  const [data, setData] = useState({});
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // form response
  const formResponse = (success, message) => {
    setSuccess(success);
    setDisplayMessage(true);
    setMessage(message);
    setTimeout(() => setDisplayMessage(false), 7000);
  };

  // form changes
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    formResponse(null, "Please wait...");
    // validates email and sends email
    if (!validator.isEmail(data.email)) {
      setLoading(false);
      formResponse(false, "Please check your email and Try again");
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(() => {
          formResponse(true, "Message has been sent successfully");
          e.target.reset();
          setLoading(false);
        })
        .catch(() => {
          formResponse(false, "Something went wrong, please retry again");
          setLoading(false);
        });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <span
        style={{
          display: !displayMessage ? "none" : "",
        }}
        className={`${success ? "bg-green-200" : "bg-red-200"} ${
          loading ? "bg-white" : ""
        } p-2`}
      >
        {message}
      </span>
      <div>
        <label htmlFor="username"> Name</label>
        <input
          type="text"
          name="username"
          required
          onChange={handleChange}
          className="w-full py-3 outline-none rounded-sm bg-slate-100 px-2"
        />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input
          required
          type="text"
          name="subject"
          onChange={handleChange}
          className="w-full py-3 outline-none rounded-sm bg-slate-100 px-2"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          className="w-full py-3 outline-none rounded-sm bg-slate-100 px-2"
        />
      </div>
      <div>
        <label htmlFor="message"> Message</label>
        <textarea
          type="text"
          name="message"
          required
          onChange={handleChange}
          className="w-full py-3 outline-none rounded-sm bg-slate-100 px-2"
          rows={5}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-purple-700 w-fit px-6 py-3 text-white disabled:bg-purple-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
