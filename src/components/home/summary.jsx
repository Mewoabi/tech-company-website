import React from 'react'
import { Link } from 'react-router-dom'

const Summary = ({style}) => {
    return (
        <div className={'px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 relative mb-30' + " " + style}>
        {/* Main Container */}
        <div className="flex flex-col md:flex-row gap-0 absolute left-4 sm:left-6 md:left-10 lg:left-20 xl:left-42 top-[-100px] w-11/12 sm:w-9/10 lg:w-10/12 xl:w-8/10">
          {/* Why Choose Us Card */}
          <div className="w-full md:w-1/2 p-8 shadow-lg bg-primary">
            <div className="mb-6 px-5">
              <div className="flex items-center gap-3 mb-4 pt-10">
                {/* <div className="w-8 h-[2px] bg-amber-500"></div> */}
                <h2 className="text-2xl font-bold text-secondary-dark">Why Choose Us?</h2>
              </div>
              {/* <p className="text-gray-600 italic mb-6">"Quality means doing it right when no one is looking."</p> */}
              <h3 className="text-secondary-dark text-4xl font-bold mb-6 leading-12">Quality means doing it right when no one is looking.</h3>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-secondray-dark">✔</span>
                  <div>
                    <span className="font-semibold text-gray-800">High-Quality Services</span>
                    <span className="text-gray-600"> - We use modern technology to ensure top-notch results.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondray-dark">✔</span>
                  <div>
                    <span className="font-semibold text-gray-800">Affordable Pricing</span>
                    <span className="text-gray-600"> - Get premium services at reasonable rates.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondray-dark">✔</span>
                  <div>
                    <span className="font-semibold text-gray-800">Fast & Reliable</span>
                    <span className="text-gray-600"> - We deliver on time without compromising quality.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondray-dark">✔</span>
                  <div>
                    <span className="font-semibold text-gray-800">Experienced Team</span>
                    <span className="text-gray-600"> - Our professionals are skilled and dedicated.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondray-dark">✔</span>
                  <div>
                    <span className="font-semibold text-gray-800">Customer Satisfaction</span>
                    <span className="text-gray-600"> - Your needs are our priority.</span>
                  </div>
                </li>
              </ul>

              <Link to={'/about'} className=" text-neutral-100 px-10 py-3 bg-secondary-dark">ABOUT US</Link>
            </div>
          </div>
      
          {/* About Us Card */}
          <div className="w-full md:w-1/2 bg-white p-8  shadow-lg">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-center">
                <p className="text-7xl font-bold text-amber-500 mb-2">85+</p>
                <p className="text-medium font-bold text-gray-600">Trained Professionals</p>
              </div>
              <div className="text-center">
                <p className="text-7xl font-bold text-amber-500 mb-2">2K+</p>
                <p className="text-medium font-bold text-gray-600">Documents Processed</p>
              </div>
              <div className="text-center">
                <p className="text-7xl font-bold text-amber-500 mb-2">200+</p>
                <p className="text-medium font-bold text-gray-600">IT Solutions Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-7xl font-bold text-amber-500 mb-2">1.3K+</p>
                <p className="text-medium font-bold text-gray-600">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Summary