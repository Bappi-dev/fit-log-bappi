"use client";

import { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutProvider";
import Image from "next/image";
import { Check, Trash } from "lucide-react";
import Link from "next/link";

const MyPlan = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlan must be inside WorkoutProvider");
  }

  const { selectedWorkouts, savedWorkouts } = context;

  // কোন tab active
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  // Active tab অনুযায়ী workout
  const workoutsToShow =
    activeTab === "today" ? selectedWorkouts : savedWorkouts;

  // Active tab-এর total minutes
  const totalMinutes = workoutsToShow.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  // Active tab-এর total calories
  const totalCalories = workoutsToShow.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="min-h-screen bg-[#0d0f12] p-5 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <h1 className="text-2xl font-bold">
          MY PLAN
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-3 rounded-xl border border-[#272b32] bg-[#15181e]">

          {/* Exercises */}
          <div className="p-6">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-3xl font-bold text-[#ccff00]">
              {workoutsToShow.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-l border-[#272b32] p-6">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-3xl font-bold">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-l border-[#272b32] p-6">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-3xl font-bold">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="mb-4 flex gap-2">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-xs ${activeTab === "today"
                  ? "bg-[#1b1e23] text-white"
                  : "text-gray-500"
                }`}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs ${activeTab === "saved"
                  ? "bg-[#1b1e23] text-white"
                  : "text-gray-500"
                }`}
            >
              Saved
            </button>
          </div>

          {/* Workout Cards */}
          <div className="space-y-3">

            {workoutsToShow.length === 0 ? (
              <div className="rounded-xl border border-[#272b32] bg-[#15181e] p-10 text-center text-sm text-gray-500">
                {activeTab === "today"
                  ? "No workouts added to today's plan."
                  : "No saved workouts yet."}
              </div>
            ) : (
              workoutsToShow.map((workout) => (
                <div
                  key={workout.id}
                  className="flex items-center gap-4 rounded-xl border border-[#272b32] bg-[#15181e] p-3"
                >
                  {/* Image */}
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={100}
                    height={70}
                    className="h-[70px] w-[100px] rounded-lg object-cover"
                  />

                  {/* Content */}
                  <div className="flex-1">

                    <h2 className="font-bold uppercase">
                      {workout.name}
                    </h2>

                    <p className="text-xs text-gray-500">
                      {workout.muscleGroups?.[0]}
                    </p>

                    <div className="mt-1 flex gap-3 text-xs text-gray-400">

                      <span>
                        ◷ {workout.duration} min
                      </span>

                      <span>
                        🔥 {workout.caloriesBurned} kcal
                      </span>

                      <span>
                        ⭐ {workout.rating}
                      </span>

                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">

                    {/* View Details */}
                    <Link
                      href={`/workouts/${workout.id}`}
                      className="rounded-full border border-[#30343b] px-4 py-2 text-xs"
                    >
                      View Details
                    </Link>

                    {/* Mark as Done - only Today's Plan */}
                    {activeTab === "today" && (
                      <button className="flex items-center gap-1 rounded-full border border-[#30343b] bg-[#CCFF00] px-4 py-2 text-xs text-black">
                        <Check size={15} />
                        Mark as Done
                      </button>
                    )}

                  </div>

                  {/* Remove */}
                  <button className="text-gray-500 hover:text-red-500">
                    <Trash size={20} />
                  </button>

                </div>
              ))
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlan;