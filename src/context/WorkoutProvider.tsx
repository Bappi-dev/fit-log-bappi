'use client'
import  { createContext,  useState } from 'react';

interface IWorkoutContext {
  selectedWorkouts: number;
  setSelectedWorkouts: React.Dispatch<React.SetStateAction<number>>;
}

export const WorkoutContext = createContext<IWorkoutContext[]>([])

const WorkoutProvider = ({children}: {children : React.ReactNode}) => {
      const [selectedWorkouts, setSelectedWorkouts] = useState(0);
      const sherad = {
        selectedWorkouts, 
        setSelectedWorkouts
      }
    return <WorkoutContext.Provider value={sherad}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;