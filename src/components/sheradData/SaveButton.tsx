"use client";

import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";


import { toast } from "react-toastify";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { IWorkouts } from "@/types/type";
import { CiBookmark } from "react-icons/ci";


interface IPlanButtonProps {
  workout: IWorkouts;
}

const SavedButton = ({ workout }: IPlanButtonProps) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("SavedButton must be inside WorkoutProvider");
  }

  const { addSaved , savedWorkouts} = context;

  const alreadyAdded=savedWorkouts.some((item)=>
    item.id===workout.id
  );

  return (
<button
  onClick={() => {
    if (alreadyAdded) {
      toast.error("Already Saved");
      return;
    }
    addSaved(workout);
    toast.success("Saved for later");
  }}
  className={`flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition ${
    alreadyAdded
      ? " text-white border-gary-200 cursor-pointer"
      : " text-white border   cursor-pointer"
  }`}
>
  <CiBookmark size={20} />
  Save for later
</button>
  );
};

export default SavedButton;;