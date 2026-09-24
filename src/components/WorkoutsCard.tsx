'use client'
import { WorkoutContext } from '@/context/WorkoutProvider';
import { IWorkouts } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { CgBmw } from 'react-icons/cg';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { WiTime4 } from 'react-icons/wi';

interface IWorkoutProps {
    workout: IWorkouts
    setSelectedWorkouts: React.Dispatch<React.SetStateAction<number>>;
}

const WorkoutsCard = ({ workout }: IWorkoutProps) => {
    
    return (
        <Link
            href={`workouts/${workout.id}`}>
            <div className="rounded-xl hover:border border-amber-300  transition-transform duration-300 bg-[#4b4e57] text-white shadow-lg my-6">
                {/* Image */}
                <div className="h-[220px]  rounded-b-none rounded-2xl  overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={900}
                        height={600}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4">

                    {/* Tags */}
                    <div className="mb-3 flex flex-wrap gap-2">
                        {workout.muscleGroups.slice(0, 2).map((muscle, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-[#b6ff00] px-2.5 py-1 text-[10px] font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Name */}
                    <h2 className="mb-1 text-sm font-bold uppercase">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mb-3 text-[11px] text-gray-200">
                        {workout.equipment}
                    </p>

                    {/* Divider */}
                    <div className="mb-3 border-t border-gray-800" />

                    {/* Stats */}
                    <div className="flex items-center justify-items-start gap-5 text-[10px] text-gray-400">

                        <div className="flex items-center font-bold gap-1">
                            <WiTime4 />
                            <span>{workout.duration} min</span>
                        </div>

                        <div className="flex items-center font-bold gap-1">
                            <CgBmw />
                            <span>{workout.caloriesBurned} kcal</span>
                        </div>

                        <div className="flex items-center  font-bold gap-1">
                            <FaRegStarHalfStroke />
                            <span>{workout.rating}</span>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutsCard;
