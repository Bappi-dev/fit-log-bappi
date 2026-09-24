import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assest/banner.png'

const Banner = () => {
    return (
        <div className='lg:flex justify-around gap-12 mt-15'>
            <div className='space-y-6'>
                <p className='text-[#C2F800]'>WORKOUT LIBRARY</p>
                <h1 className='text-5xl font-bold'>TRAIN WITH INTENT. LOG <br />
                    EVERY SET.</h1>
                <p className='text-gray-300'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                    into today's plan, and watch the week's work add up.</p>
                <button className='btn border-none bg-[#C2F800]'>BROWSE WORKOUTS</button>
            </div>
            <div>
                <Image src={BannerImg} alt='imge'></Image>
            </div>
        </div>
    );
};

export default Banner;