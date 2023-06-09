import { Link } from 'react-router-dom'

const ContactButton = () => {
  return (
    <div>
      <h5 className="font-bold text-2xl">
          We want to work with you
        </h5>
        <Link to="/contact-us">
          <button className="w-full bg-purple-800 text-white py-4 text-xl ">
            Let's Talk
          </button>
        </Link>
    </div>
  )
}

export default ContactButton
