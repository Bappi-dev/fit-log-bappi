"use client";

import { WorkoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
import Link from "next/link";

const SavedButton = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("SavedButton must be inside WorkoutProvider");
  }

  const { savedWorkouts } = context;

  return (
    <Link href="/saved">
      Saved ({savedWorkouts.length})
    </Link>
  );
};

export default SavedButton;