import React from 'react'

const AboutBook = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between w-full gap-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 py-10'>
            <div className='w-full lg:w-3/4'>
                <h4 className='text-3xl font-bold mb-4'>We are at you service !!!</h4>
                <p className=''>Whether you’re looking to enhance your skills through our <strong>computer training programs</strong> or need <strong>fast and reliable printing services</strong>, we are here to serve you</p>
            </div>
            <div className='w-full lg:w-1/4'>
                <button onClick={() => window.location.href = 'https://wa.me/237651337209/'} className='border border-secondary-dark px-8 py-3 bg-primary hover:bg-primary-dark hover:cursor-pointer'>
                    BOOK AN APPOINTMENT
                    <strong className="ml-2">&rarr;</strong>
                </button>
            </div>
        </div>
    )
}

export default AboutBook