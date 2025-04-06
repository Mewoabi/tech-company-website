import React from 'react';

const AboutCard = ({ icon: Icon, title, content }) => {
    return (
        <div className="p-6 text-center hover:shadow-lg flex flex-col md:flex-row items-start justify-between gap-0 md:gap-4">
            <div className="text-4xl md:mb-4 mx-auto flex flex-col md:flex-row md:items-center md:justify-start gap-3 md:gap-5">
                <div className=' text-yellow-500 text-center flex justify-center'>
                    {Icon && <Icon />}
                </div>
                <h3 className="block  md:hidden text-3xl font-bold text-shadow-secondary-dark">{title}</h3>
            </div>
            <div className='flex flex-col items-start justify-start'>
                <h3 className="hidden md:block text-3xl font-bold mb-2 text-shadow-secondary-dark">{title}</h3>
                <p className="text-gray-600 text-left">{content}</p>
            </div>
        </div>
    );
};

export default AboutCard;
