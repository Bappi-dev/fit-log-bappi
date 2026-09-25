"use client";

import { useContext } from "react";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkouts } from "@/types/type";

interface IPlanButtonProps {
  workout: IWorkouts;
}

const PlanButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("PlanButton must be inside WorkoutProvider");
  }

  const { addPlan } = context;

  return (
    <button
      onClick={() => addPlan(workout)}
      className="flex items-center gap-2 bg-[#ccff00] text-black font-semibold px-5 py-2.5 rounded-full hover:bg-[#b8e600] transition cursor-pointer"
    >
      Add to today's plan
    </button>
  );
};

export default PlanButton;