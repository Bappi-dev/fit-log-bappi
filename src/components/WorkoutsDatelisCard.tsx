import { IWorkouts } from '@/types/type';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface IWorkoutPorps {
    workout: IWorkouts
}

const WorkoutsDatelisCard = ({ workout }: IWorkoutPorps) => {
    return (
        <div>
            <div className="min-h-screen bg-[#0d0f12] text-white p-5">
                <div className="mx-auto max-w-7xl rounded-lg bg-[#101216] p-5">

                    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.05fr]">

                        {/* Image */}
                        <div>
                            <Image
                                width={600}
                                height={500}
                                src={workout.image}
                                alt={workout.name}
                                className="h-full max-h-[580px] w-full rounded-lg object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col">

                            {/* Title */}
                            <h1 className="text-2xl font-extrabold uppercase tracking-tight">
                                {workout.name}
                            </h1>

                            {/* Description */}
                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                {workout.description}
                            </p>

                            {/* Muscle Groups */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {workout.muscleGroups.map((muscle) => (
                                    <span
                                        key={muscle}
                                        className="rounded-full bg-[#c6ff00] px-3 py-1 text-xs font-bold text-black"
                                    >
                                        {muscle}
                                    </span>
                                ))}
                            </div>

                            {/* Workout Information */}
                            <div className="mt-4 space-y-5 overflow-hidden rounded-xl border border-[#272b32] bg-[#15181e]">

                                <div className='lg:flex justify-between'>
                                    <h3 className='text-gray-400'>EQUIPMENT</h3>
                                    <p>{workout.equipment}</p>
                                </div>

                                <div className='lg:flex justify-between'>
                                    <h3 className='text-gray-400'>DIFFICULTY</h3>
                                    <p>{workout.difficulty}</p>
                                </div>

                                <div className='lg:flex justify-between'>
                                    <h3 className='text-gray-400'>SETS</h3>
                                    <p>{workout.sets.toString()}</p>
                                </div>

                                <div className='flex justify-between'>
                                    <h3 className='text-gray-400'>REPS</h3>
                                    <p>{workout.reps}</p>
                                </div>

                                <div className='lg:flex justify-between '>
                                    <h3 className='text-gray-400'>DURATION</h3>
                                    <p>{workout.duration}Min</p>
                                </div>

                                <div className='lg:flex justify-between'>
                                    <h3 className='text-gray-400'>CALORIES</h3>
                                    <p>{workout.caloriesBurned}</p>
                                </div>
                                <div className='lg:flex justify-between'>
                                    <h3 className='text-gray-400'>RATING</h3>
                                    <p>{workout.rating.toString()}</p>
                                </div>

                            </div>

                            {/* Instructions */}
                            <div className="mt-5">
                                <h2 className="text-sm font-bold tracking-wide">
                                    INSTRUCTIONS
                                </h2>

                                <ol className="mt-3 space-y-2">
                                    {workout.instructions.map((instruction: ReactNode, index: number) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-xs leading-5 text-gray-400"
                                        >
                                            <span className="text-gray-500">
                                                {index + 1}.
                                            </span>

                                            <span>{instruction}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-wrap gap-3">
                                <

                                <button className="rounded-md border border-[#30343b] px-4 py-2 text-xs text-gray-300 transition hover:bg-[#1b1e23]">
                                    ♡ Save for later
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutsDatelisCard;