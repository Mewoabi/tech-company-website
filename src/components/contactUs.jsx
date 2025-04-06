import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4 pb-30">
      <div className="bg-white shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Contact Form */}
        <div className="bg-secondary-dark text-white w-full md:w-1/2 p-12 py-15">
          <h2 className="text-5xl font-bold mb-8">Contact us</h2>
          <p className="mb-8 text-medium">Ready to Work Together? Build a project with us!</p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-white text-secondary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 bg-white text-secondary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-white text-secondary focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-3 bg-white text-secondary focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-secondary font-semibold py-3 px-6"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://advancedtechcomputercenter.site/wp-content/uploads/2025/04/pexels-photo-792199-1.webp"
            alt="Contact illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
