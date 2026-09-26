
"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import navImag from "@/assest/logo (4).png";
import Link from "next/link";
import { WorkoutContext } from "@/context/WorkoutProvider";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { selectedWorkouts, savedWorkouts } =
    useContext(WorkoutContext)!;

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">

        {/* Navbar Top */}
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex gap-3 items-center"
            onClick={closeMenu}
          >
            <Image
              src={navImag}
              alt="FitLog logo"
              width={45}
              height={45}
            />
            <p className="text-xl font-bold">FITLOG</p>
          </Link>


          <div>
            <ul className="flex gap-6">
              <li
                className={
                  pathname === "/"
                    ? "text-[#C2F800]"
                    : ""
                }
              >
                <Link href="/">Workouts</Link>
              </li>

              <li
                className={
                  pathname === "/myplan"
                    ? "text-[#C2F800]"
                    : ""
                }
              >
                <Link href="/myplan">My Plan</Link>
              </li>
            </ul>
          </div>
          {/* Desktop Menu */}
          <div className=" hidden lg:flex items-center gap-8">

            <div className="flex gap-5 items-center">

              <Link href="/myplan">
                Plan{" "}
                <span className="bg-[#C2F800] text-black rounded-full px-2">
                  {selectedWorkouts.length}
                </span>
              </Link>

              <Link href="/myplan">
                Saved {" "}
                <span className=" text-white text-black rounded-full px-2">
                  ({savedWorkouts.length})
                </span>
              </Link>

            </div>
          </div>


          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>


        {isOpen && (
          <div className="lg:hidden mt-5 pb-3">

            <ul className="flex flex-col gap-4">

              <li
                className={
                  pathname === "/"
                    ? "text-[#C2F800]"
                    : ""
                }
              >
                <Link
                  href="/"
                  onClick={closeMenu}
                >
                  Workouts
                </Link>
              </li>

              <li
                className={
                  pathname === "/myplan"
                    ? "text-[#C2F800]"
                    : ""
                }
              >
                <Link
                  href="/myplan"
                  onClick={closeMenu}
                >
                  My Plan
                </Link>
              </li>

              <li>
                <Link
                  href="/myplan"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  Plan
                  <span className="bg-[#C2F800] text-black rounded-full px-2 text-sm">
                    {selectedWorkouts.length}
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  href="/saved"
                  onClick={closeMenu}
                  className="flex items-center gap-2"
                >
                  Saved
                  <span className="bg-[#C2F800] text-black rounded-full px-2 text-sm">
                    {savedWorkouts.length}
                  </span>
                </Link>
              </li>

            </ul>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
