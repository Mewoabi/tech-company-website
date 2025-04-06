const ContactForm = () => {
    return (
      <div className="md:px-16 bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-12 pb-30">
        <form className="flex flex-col gap-4">
          <label className="font-semibold -mb-2">Name <span className="text-red-600">*</span></label>
          <div className="flex gap-4 w-full lg:w-3/5">
            <input
              type="text"
              placeholder="First"
              className="w-full p-3 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white"
            />
            <input
              type="text"
              placeholder="Last"
              className="w-full p-3 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white"
            />
          </div>
  
          <label className="font-semibold -mb-2">Email <span className="text-red-600">*</span></label>
          <input
            type="email"
            className="p-3 border border-gray-300 focus:outline-none focus:border-1 focus:border-dotted focus:border-gray-600 bg-gray-50 focus:bg-white w-full lg:w-3/5"
          />
  
          <label className="font-semibold -mb-2">Comment or Message</label>
          <textarea
            className="p-3 border border-gray-300 focus:outline-none focus:border-2 focus:border-dotted focus:border-gray-600 h-[150px] resize-y bg-gray-50 focus:bg-white"
          />
  
          <button
            type="submit"
            className="px-10 py-3 bg-primary text-secondary-dark hover:bg-primary-dark transition-colors cursor-pointer w-fit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;