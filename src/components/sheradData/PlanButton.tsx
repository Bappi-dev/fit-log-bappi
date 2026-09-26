"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkouts } from "@/types/type";
import { IoBagAddOutline, IoBagAddSharp } from "react-icons/io5";


interface IPlanButtonProps {
  workout: IWorkouts;
}

const PlanButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);


  if (!context) {
    throw new Error("PlanButton must be inside WorkoutProvider");
  }

  const { addPlan, selectedWorkouts } = context;

  const alreadyAdded = selectedWorkouts.some((item) => item.id === workout.id);

  return (
    <button
      onClick={() => {
        if (alreadyAdded) {
          toast.error("Already added");
          return;
        }
        addPlan(workout);
        toast.success("Added to today's plan");
      }}

      className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition ${alreadyAdded
          ? "bg-[#ccff00] text-black hover:bg-[#b8e600] cursor-pointer"
          : "bg-[#ccff00] text-black hover:bg-[#b8e600] cursor-pointer"
        }`}

    >
      <IoBagAddOutline size={20}  />
      Add to today's plan
    </button>
  );
};

export default PlanButton;