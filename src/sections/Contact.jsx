import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#181818] relative pt-16 py-28 px-6">
      {/* <SectionOrder number={3} title={"Contact Me"} /> */}

      <div className="text-center space-y-3">
        <h1 className="text-3xl font-semibold">CONTACT</h1>
        <div className="border-[1px] border-red-700 mx-auto w-20"></div>
        <p>
          Feel free to Contact me by submitting the form below <br></br> and I
          will get back to you as soon as possible
        </p>
      </div>

      <div className="max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto mt-16">
        <div className="flex flex-col">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            className="outline-none bg-transparent border-b py-4"
            placeholder="Enter your name"
          ></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Email Address</label>
          <input
            id="name"
            className="outline-none bg-transparent border-b py-4"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <label htmlFor="name">Your Message</label>
          <textarea
            id="name"
            rows={3}
            className="outline-none bg-transparent border-b py-4"
            placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?
            "
          ></textarea>
          <button className="bg-white mt-10 mx-auto border-b-4 border-b-red-700 hover:bg-red-700 hover:text-white duration-200  items-center text-black py-4 w-[250px] gap-3">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
