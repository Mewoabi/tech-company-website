import React from 'react'
import TestimonialCard from './testimonialCard'

const Testimonials = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 xl:px-42 pb-20'>
            <h4 className="text-2xl font-bold text-secondary-light text-center">What our clients say</h4>
            <h3 className="text-5xl font-bold text-secondary-dark mt-2 w-full lg:w-1/2 m-auto text-center">
                Testimonials
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <TestimonialCard
                    profileUrl="http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2021/11/h1-img-02-100x100-1.png"
                    role="Manager"
                    name="Ann Smith"
                    content="Our school needed ID cards and document scanning services. The team at Advanced Tech delivered fast and high-quality results. We will definitely use their services again!"
                />
                <TestimonialCard
                    profileUrl="http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2021/11/h1-img-02-100x100-1.png"
                    role="Manager"
                    name="Ann Smith"
                    content="Our school needed ID cards and document scanning services. The team at Advanced Tech delivered fast and high-quality results. We will definitely use their services again!"
                />
                <TestimonialCard
                    profileUrl="http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2021/11/h1-img-02-100x100-1.png"
                    role="Manager"
                    name="Ann Smith"
                    content="Our school needed ID cards and document scanning services. The team at Advanced Tech delivered fast and high-quality results. We will definitely use their services again!"
                />
                <TestimonialCard
                    profileUrl="http://advancedtechcomputercenter-site.preview-domain.com/wp-content/uploads/2021/11/h1-img-02-100x100-1.png"
                    role="Manager"
                    name="Ann Smith"
                    content="Our school needed ID cards and document scanning services. The team at Advanced Tech delivered fast and high-quality results. We will definitely use their services again!"
                />
            </div>
        </div>
    )
}

export default Testimonials