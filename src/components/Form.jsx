
const Form = () => {
  return (
    <div className="flex flex-col gap-4">
    <div>
      <label htmlFor="username"> Name</label>
      <input
        type="text"
        name="username"
        className="w-full py-3 outline-none rounded-sm bg-slate-100"
      />
    </div>
    <div>
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        name="subject"
        className="w-full py-3 outline-none rounded-sm bg-slate-100"
      />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full py-3 outline-none rounded-sm bg-slate-100"
      />
    </div>
    <div>
      <label htmlFor="message"> Message</label>
      <textarea
        type="text"
        name="message"
        className="w-full py-3 outline-none rounded-sm bg-slate-100"
        rows={5}
      />
    </div>
    <button className="bg-purple-700 w-fit px-6 py-3">
      Send Message
    </button>
  </div>
  )
}

export default Form