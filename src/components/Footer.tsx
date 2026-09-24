import Image from 'next/image';
import React from 'react';
import footerImg from '@/assest/logo (4).png'

const Footer = () => {
    return (
        <div className='flex justify-between container mx-auto py-10 items-center'>
            <div className='flex gap-2'>
                <Image src={footerImg} alt='footer'></Image>
                <p className='text-xl font-bold'>FITLOG</p>
            </div>
            <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default Footer;