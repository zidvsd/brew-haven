"use client";
import { Coffee, X, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  const [isActive, setIsActive] = useState("Home");

  return (
    <div className="bg-foam sticky top-0 shadow-sm z-50">
      <div className="flex flex-row  items-center justify-between custom-container w-full py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-2 group">
          <Coffee className="text-espresso size-8 transition-transform duration-300 group-hover:rotate-20" />
          <h1 className="text-espresso font-bold text-3xl font-playfair">
            Brew Haven
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row items-center gap-x-4  font-inter text-coffeeDark">
          <Link
            onClick={() => setIsActive("Home")}
            className={`${
              isActive === "Home" ? "text-espresso" : "text-grayCoffee"
            } hover-utility hover:opacity-80`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsActive("Menu")}
            className={`${
              isActive === "Menu" ? "text-espresso" : "text-grayCoffee"
            } hover-utility hover:opacity-80`}
            href={"/menu"}
          >
            Menu
          </Link>
          <Link
            onClick={() => setIsActive("About")}
            className={`${
              isActive === "About" ? "text-espresso" : "text-grayCoffee"
            } hover-utility hover:opacity-80`}
            href={"/about"}
          >
            About
          </Link>
        </div>

        {/* Mobile Toggle */}
        {!isToggle ? (
          <Menu
            className="select-none cursor-pointer text-coffeeDark md:hidden"
            onClick={() => setIsToggle(true)}
          />
        ) : (
          <X
            className="select-none cursor-pointer text-coffeeDark md:hidden"
            onClick={() => setIsToggle(false)}
          />
        )}
      </div>

      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${
          isToggle ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="custom-container px-12 flex flex-col border-t border-t-coffeeMedium text-coffeeDark font-inter py-2 gap-y-2">
          <Link
            onClick={() => setIsActive("Home")}
            className={`${
              isActive === "Home"
                ? "bg-coffeeMedium text-coffeeDark"
                : "bg-transparent"
            } hover-utility hover:opacity-80 p-2`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => setIsActive("Menu")}
            className={`${
              isActive === "Menu"
                ? "bg-coffeeMedium text-coffeeDark"
                : "bg-transparent"
            } hover-utility hover:opacity-80 p-2`}
            href={"/menu"}
          >
            Menu
          </Link>
          <Link
            onClick={() => setIsActive("About")}
            className={`${
              isActive === "About"
                ? "bg-coffeeMedium text-coffeeDark"
                : "bg-transparent"
            } hover-utility hover:opacity-80 p-2`}
            href={"/about"}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
