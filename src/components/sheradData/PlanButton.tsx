'use client'
import { WorkoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";

const PlanButton = () => {
  const context = useContext(WorkoutContext);


  const { selectedWorkouts } = context;

  return (
    <button>
      Plan ({selectedWorkouts})
    </button>
  );
};

export default PlanButton;