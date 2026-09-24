
import Banner from '@/components/Banner';
import WorkoutsCard from '@/components/WorkoutsCard';
import { IWorkouts } from '@/types/type';
import React from 'react';

export const getWorkoutsPlan = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
  const data = await res.json()
  return data;
}
const HomePage = async () => {
  const workouts = await getWorkoutsPlan()
  console.log(workouts);
  return (
    <div className='container mx-auto py-8'>
      <Banner />
      <div className='py-20'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>THE LIBRARY</h2>
          <p className='text-gray-300'>Twelve lifts covering every major muscle group.</p>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            workouts.map((workout: IWorkouts) => <WorkoutsCard key={workout.id} workout={workout} />)
          }
        </div>
      </div>
    </div>
  );
};

export default HomePage;
