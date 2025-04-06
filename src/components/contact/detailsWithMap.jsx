import React from 'react';

const DetailsWithMap = () => {
    return (
        <section className=" bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-12">
            <div className='mb-25'>
                <h3 className="text-xl md:text-2xl font-bold text-center text-primary mb-7">Reach out for quality services</h3>
                <h2 className="text-3xl md:text-5xl font-bold text-center text-secondary-dark">
                    Contact Details
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-15 lg:gap-3 items-start w-full">
                {/* Contact Info */}
                <div className="w-full lg:w-1/3 text-secondary-dark flex flex-col gap-7">
                    <div>
                        <h3 className="text-xl md:text-3xl font-bold">A-TECH Head Office</h3>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl md:text-3xl mb-3">Address:</h4>
                        <p>Sosoliso street opposite health center buea</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl md:text-3xl mb-3">Phone:</h4>
                        <p>+237671541106 / +237675566345</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl md:text-3xl mb-3">Email:</h4>
                        <p>info@atech.com</p>
                        <p>support@atech.com</p>
                    </div>

                    <button 
                    onClick={() => window.location.href = 'https://wa.me/237651337209/'} 
                    className="bg-primary hover:bg-primary-dark text-secondary-dark py-3 px-15 mt-4 w-fit"
                    >
                        GET APPOINTMENT
                    </button>
                </div>

                {/* Google Map */}
                <div className='w-full  lg:w-2/3'>
                    <iframe
                        title="A-TECH Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.2930298154233!2d9.279361974530275!3d4.162685846087621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106131d54eb4fee9%3A0x197eb5fa36dd16ea!2sATECH!5e0!3m2!1sfr!2scm!4v1743963926045!5m2!1sfr!2scm"
                        width="100%"
                        height="700"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[350px]  md:h-[450px] border-0 rounded"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default DetailsWithMap;

