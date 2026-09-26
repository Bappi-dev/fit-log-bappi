
import Image from 'next/image';
import React from 'react';
import BannerImg from '@/assest/banner.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-15">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

               
                <div className="w-full lg:w-1/2 space-y-5 sm:space-y-6 text-center lg:text-left">
                    <p className="text-[#C2F800] text-sm sm:text-base font-medium">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-gray-300 text-sm sm:text-base leading-6">
                        FitLog is a dark, no-nonsense gym companion: pick a lift,
                        lock it into today's plan, and watch the week's work add up.
                    </p>

                    <button className="btn border-none bg-[#C2F800] text-black hover:bg-[#b5e900]">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <Image
                        src={BannerImg}
                        alt="Workout banner"
                        className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
                        priority
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;
