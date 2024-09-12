import React from "react";

const Contact = () => {
  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="py-12 px-4 px-sm-0">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-slate-50">Contact Us</h2>
        <form className="mt-8 w-full lg:w-1/2 mx-auto" onSubmit={handleForm}>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-slate-800 text-slate-300 placeholder:text-slate-300 rounded-md shadow-sm outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-slate-800 text-slate-300 placeholder:text-slate-300 rounded-md shadow-sm outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 bg-slate-800 text-slate-300 placeholder:text-slate-300 rounded-md shadow-sm h-32 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
