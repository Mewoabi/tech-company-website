import React from 'react'
import CardLayout from '../cardLayout'
import atechfront from '../../assets/atechfront.jpg'
import techlab from '../../assets/atechlab.jpg'
import profile from '../../assets/atechprofile.jpg'
import photocopy from '../../assets/photocopying.jpg'


const HomeGallery = () => {
    return (
        <div className="my-20 flex justify-center items-center flex-wrap w-full px-0.5">
            <CardLayout
                backgroundImage={profile}
                className={'w-full sm:w-1/2 lg:w-1/4 h-[500px]'}
                gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
            >
                <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                    <p className='font-bold text-2xl'>Service</p>
                    <p Name='font-bold text-2xl'>Photocopying</p>
                </div>
            </CardLayout>
            <CardLayout
                backgroundImage={atechfront}
                className={'w-full sm:w-1/2 lg:w-1/4 h-[500px]'}
                gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
            >
                <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                    <p className='font-bold text-2xl'>Service</p>
                    <p Name='font-bold text-2xl'>Photocopying</p>
                </div>
            </CardLayout>
            <CardLayout
                backgroundImage={photocopy}
                className={'w-full sm:w-1/2 lg:w-1/4 h-[500px]'}
                gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
            >
                <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                    <p className='font-bold text-2xl'>Service</p>
                    <p Name='font-bold text-2xl'>Photocopying</p>
                </div>
            </CardLayout>
            <CardLayout
                backgroundImage={techlab}
                className={'w-full sm:w-1/2 lg:w-1/4 h-[500px]'}
                gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
            >
                <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                    <p className='font-bold text-2xl'>Service</p>
                    <p Name='font-bold text-2xl'>Photocopying</p>
                </div>
            </CardLayout>
        </div>
    )
}

export default HomeGallery