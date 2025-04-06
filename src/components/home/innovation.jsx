import React from 'react'
import CardLayout from '../cardLayout'

import atechfront from '../../assets/atechfront.jpg'
import techlab from '../../assets/atechlab.jpg'
import photocopy from '../../assets/photocopying.jpg'
import { Link } from 'react-router-dom'

const HomeInnovatioin = () => {
    return (
        <div className="text-center py-8">
            <h4 className="text-2xl font-bold text-secondary-light">Innovation</h4>
            <h3 className="text-3xl px-5 md:text-5xl font-bold text-secondary-dark mt-2 w-full lg:w-1/2 m-auto">
                We Are Leading International Company In The World
            </h3>
            <div className="my-20 flex justify-center items-center gap-4 flex-wrap">
                <CardLayout
                    backgroundImage={photocopy}
                    className={'w-[400px] h-[500px]'}
                    gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
                >
                    <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                        <p className='font-bold text-2xl'>Service</p>
                        <p Name='font-bold text-2xl'>Photocopying</p>
                    </div>
                </CardLayout>
                <CardLayout
                    backgroundImage={atechfront}
                    className={'w-[400px] h-[500px]'}
                    gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
                >
                    <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                        <p className='font-bold text-2xl'>Service</p>
                        <p Name='font-bold text-2xl'>Photocopying</p>
                    </div>
                </CardLayout>
                <CardLayout
                    backgroundImage={techlab}
                    className={'w-[400px] h-[500px]'}
                    gradientOverlay={'linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 85%, rgba(0, 0, 0, 0.5) 100%)'}
                >
                    <div className='text-neutral-100 absolute bottom-2 left-2 p-4'>
                        <p className='font-bold text-2xl'>Service</p>
                        <p Name='font-bold text-2xl'>Photocopying</p>
                    </div>
                </CardLayout>
            </div>
            <Link className="mt-6 bg-primary text-secondary-dark px-10 py-3 hover:bg-primary-dark transition cursor-pointer">
                ABOUT US
            </Link>
        </div>
    )
}

export default HomeInnovatioin