"use client";
import { useState } from "react";
import { Croissant, Coffee, Snowflake, LucideIcon } from "lucide-react";
import menuCategory from "@/data/menuCategory.json";
import useMenuStore from "@/store/menuStore";
import Image from "next/image";
const icons: Record<string, LucideIcon> = {
  Coffee,
  Croissant,
  Snowflake,
};
type MenuCategoryProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};
export default function MenuCategory({
  activeCategory,
  setActiveCategory,
}: MenuCategoryProps) {
  const { menu } = useMenuStore();

  const categChecker = (category: string): number => {
    const lowerCase = category.toLowerCase();
    return menu.filter((item) => item.category.toLowerCase() === lowerCase)
      .length;
  };
  return (
    <div className="grid gap-4 md:grid-cols-3 custom-container py-16">
      {menuCategory.map((category, index) => {
        const Icon = icons[category.icon]; // get component from string
        const isActive = activeCategory === category.title;
        return (
          <button
            onClick={() => setActiveCategory(category.title)}
            key={index}
            className={`relative hover:shadow-xl flex flex-col bg-foam group border rounded-xl origin-center shadow-sm cursor-pointer overflow-hidden transform transition-all duration-300 ease-in-out ${
              isActive
                ? "border-espresso  border-2 shadow-lg"
                : "border-transparent "
            }`}
          >
            {/* number of items */}
            <div className="absolute z-10 text-coffeeLight rounded-full py-1 px-4 bg-espresso font-inter font-bold text-lg top-4 right-4">
              {categChecker(category.title)} items
            </div>
            <div className="relative h-56 overflow-hidden rounded-tl-lg rounded-tr-lg group-hover:scale-105 transition-transform">
              <Image
                src={category.image}
                alt={category.title}
                width={400} // approximate width
                height={224} // approximate height matching h-56
                className="object-cover w-full h-full"
                priority // optional: loads image faster
              />
            </div>
            <div className="flex flex-col items-start py-4 px-8 lg:py-6">
              <div className="flex flex-row items-center gap-x-4">
                {Icon && (
                  <Icon
                    className={`size-10  rounded-xl  p-2 mb-2 ${
                      isActive
                        ? "bg-espresso text-coffeeLight"
                        : "bg-coffeeMedium text-espresso"
                    }`}
                  />
                )}
                <h2 className="text-xl font-bold  font-playfair">
                  {category.title}
                </h2>
              </div>
              <p className="text-sm font-inter text-grayCoffee">
                {category.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
