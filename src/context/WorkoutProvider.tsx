'use client'
import { IWorkouts } from '@/types/type';
import  { createContext,  useState } from 'react';

interface IWorkoutContext {
  selectedWorkouts: number;
  setSelectedWorkouts: React.Dispatch<React.SetStateAction<number>>;
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);

const WorkoutProvider = ({children}: {children : React.ReactNode}) => {
      const [selectedWorkouts, setSelectedWorkouts] = useState(0);
      const [savedWorkouts, setSavedWorkouts] = useState<IWorkouts[]>([]);
      const sherad = {
        selectedWorkouts, 
        setSelectedWorkouts,
        savedWorkouts,
        setSavedWorkouts
      }
    return <WorkoutContext.Provider value={sherad}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;