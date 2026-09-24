import Image from 'next/image';
import React from 'react';
import navImag from '@/assest/logo (4).png'
import Link from 'next/link';
import PlanButton from './sheradData/PlanButton';
import SaveButton from './sheradData/SaveButton';

const Navbar = () => {
    return (
        <nav>
            <div className='lg:flex justify-between gap-4 items-center container mx-auto py-6'>
                <Link href="/" className='flex gap-3 items-center'>
                    <Image src={navImag} alt='navbar'></Image>
                    <p className='text-xl font-bold'>FITLOG</p>
                </Link>
                <ul className='lg:flex gap-5'>
                    <li><Link href="/">Workouts</Link></li>
                    <li><Link href="/myplan">My Plan</Link></li>
                </ul>
                <div className='lg:flex gap-5'>
                    <PlanButton/>
                    <SaveButton/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;