"use client";

import { createContext, useState } from "react";
import { IWorkouts } from "@/types/type";

interface IWorkoutContext {
  selectedWorkouts: IWorkouts[];
  addPlan: (workout: IWorkouts) => void;
  removePlan: (id: number) => void;

  savedWorkouts: IWorkouts[];
  addSaved: (workout: IWorkouts) => void;
  removeSaved: (id: number) => void;
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);

const WorkoutProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedWorkouts, setSelectedWorkouts] = useState<IWorkouts[]>([]);

  const [savedWorkouts, setSavedWorkouts] = useState<IWorkouts[]>([]);

  // Add workout to today's plan
  const addPlan = (workout: IWorkouts) => {
    setSelectedWorkouts((prev) => {
      const alreadyAdded = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadyAdded) {
        return prev;
      }

      // maximum 5 workouts
      if (prev.length >= 5) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  // Remove workout  plan
  const removePlan = (id: number) => {
    setSelectedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const removeSaved = (id: number) => {
    setSavedWorkouts((prev) =>
      prev.filter((workout) => workout.id !== id)
    );
  };

  const addSaved = (workout: IWorkouts) => {
    setSavedWorkouts((prev) => {
      const alreadySaved = prev.some(
        (item) => item.id === workout.id
      );

      if (alreadySaved) {
        return prev;
      }

      return [...prev, workout];
    });
  };

  return (
    <WorkoutContext.Provider
      value={{
        selectedWorkouts,
        addPlan,
        removePlan,
        savedWorkouts,
        addSaved,
        removeSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;