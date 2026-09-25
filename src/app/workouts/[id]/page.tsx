import { getWorkoutsPlan } from '@/app/page';
import WorkoutsDatelisCard from '@/components/WorkoutsDatelisCard';
import { IWorkouts } from '@/types/type';
import { notFound } from 'next/navigation';
import React from 'react';

interface IType {
    params: Promise<{
        id: string;
    }>;
}

const WorkoutsDatelis = async ({ params }: IType) => {
    const { id } = await params;
    const workouts = await getWorkoutsPlan();
    const workout = workouts.find((item: IWorkouts) => item.id === Number(id))
    if (!workout) {
        notFound();
    }
    console.log(id);
    console.log(workout);
    return (
        <div className='container mx-auto gap-4 mt-10'>
            <WorkoutsDatelisCard workout={workout} />
        </div>
    );
};

export default WorkoutsDatelis;