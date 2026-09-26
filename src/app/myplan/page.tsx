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

  const { selectedWorkouts, savedWorkouts, removePlan, removeSaved } = context;

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const [sortBy, setSortBy] = useState<"duration" | "calories">("duration");

  // Which workouts should be displayed
  const currentWorkouts =
    activeTab === "today" ? selectedWorkouts : savedWorkouts;

  // Sort workouts
  const workoutsToShow = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    return a.caloriesBurned - b.caloriesBurned;
  });

  // Total minutes
  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  // Total calories
  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="min-h-screen bg-[#0d0f12] p-5 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">
            MY PLAN
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 rounded-xl border border-[#272b32] bg-[#15181e] sm:grid-cols-3">

          {/* Exercises */}
          <div className="p-6">
            <p className="text-xs text-gray-500">
              Exercises
            </p>

            <p className="mt-1 text-3xl font-bold text-[#ccff00]">
              {currentWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-t border-[#272b32] p-6 sm:border-l sm:border-t-0">
            <p className="text-xs text-gray-500">
              Minutes
            </p>

            <p className="mt-1 text-3xl font-bold">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-t border-[#272b32] p-6 sm:border-l sm:border-t-0">
            <p className="text-xs text-gray-500">
              Calories
            </p>

            <p className="mt-1 text-3xl font-bold">
              {totalCalories}
            </p>
          </div>
        </div>

        <div className=" items-center">
          {/* Tabs */}
          <div className="mt-6 flex gap-2">

            {/* Today's Plan */}
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-xs transition ${activeTab === "today"
                ? "bg-[#1b1e23] text-white"
                : "text-gray-500 hover:text-white"
                }`}
            >
              Today's Plan
            </button>

            {/* Saved */}
            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs transition ${activeTab === "saved"
                ? "bg-[#1b1e23] text-white"
                : "text-gray-500 hover:text-white"
                }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className=" lg:flex items-center justify-end gap-3 border-y border-[#272b32] ">

            <span className="text-sm text-gray-500">
              Sort By
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories"
                )
              }
              className="rounded-lg border border-[#30343b] bg-[#15181e] px-4  text-sm text-white outline-none"
            >
              <option value="duration">
                Duration
              </option>

              <option value="calories">
                Calories
              </option>
            </select>
          </div>
        </div>

        {/* Workout List */}
        <div className="mt-6 space-y-3">

          {workoutsToShow.length === 0 ? (
            <div className="rounded-xl border border-[#272b32] bg-[#15181e] py-16 text-center">

              <p className="text-gray-400">
                {activeTab === "today"
                  ? <div className="space-y-4">
                    <h2 className="text-2xl text-white font-bold ">NOTHING HERE YET</h2>
                    <p>Browse the library and add a lift to get today moving.</p>
                    <Link href="/"> <button className="btn border rounded-5xl bg-[#C2F10E]">Go to workouts</button></Link>
                  </div>
                  : <div className="space-y-4">
                    <h2 className="text-2xl text-white font-bold ">NOTHING HERE YET</h2>
                    <p>Browse the library and add a lift to get today moving.</p>
                    <div className="">
                      <Link className="rounded-2xl" href="/"> <button className="btn border rounded-5xl bg-[#C2F10E]">Go to workouts</button></Link>
                    </div>
                  </div>}
              </p>

            </div>
          ) : (
            workoutsToShow.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col gap-4 rounded-xl border border-[#272b32] bg-[#15181e] p-3 md:flex-row md:items-center"
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

                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-gray-400">
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

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">

                  {/* View Details */}
                  <Link
                    href={`/workouts/${workout.id}`}
                    className="rounded-full border border-[#30343b] px-4 py-2 text-xs transition hover:bg-[#1b1e23]"
                  >
                    View Details
                  </Link>

                  {/* Mark as Done */}
                  {activeTab === "today" && (
                    <button
                      className="flex items-center gap-1 rounded-full border border-[#30343b] bg-[#ccff00] px-4 py-2 text-xs text-black transition hover:bg-[#b8e600]"
                    >
                      <Check size={15} />

                      Mark as Done
                    </button>
                  )}

                  {/* Delete */}
                  <button
                    onClick={() =>
                      activeTab === "today"
                        ? removePlan(workout.id)
                        : removeSaved(workout.id)
                    }
                    className="text-gray-500 transition hover:text-red-500"
                  >
                    <Trash size={20} />
                  </button>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default MyPlan;