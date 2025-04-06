import React from 'react'
import { useNavigate } from 'react-router-dom';

 const ServiceCard = ({ imageUrl, title, content, path, buttonText, styles }) => {
    return (
      <div className={"overflow-hidden hover:shadow-lg transition-shadow duration-300" + " " + styles}>
        {/* Image section - only rendered if imageUrl is provided */}
        {imageUrl && (
          <div className="h-60 bg-gray-200 overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {/* Content section */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>

        {path && 
            <div className="p-4">
                <button
                    onClick={() => window.location.href = 'https://wa.me/237651337209/'}
                    className="text-primary flex items-center hover: hover:cursor-pointer hover:text-primary-dark transition-colors duration-300 uppercase"
                >
                    {buttonText}
                    <span className="ml-2">&rarr;</span>
                </button>
            </div>
        }
      </div>
    );
  };


  export default ServiceCard;