"use client";
import { useState } from "react";
import MenuHero from "@/sections/menu/MenuHero";
import MenuCategory from "@/components/ui/MenuCategory";
import MenuItems from "@/components/MenuItems";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Coffee");

  return (
    <>
      <MenuHero />
      <MenuCategory
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <MenuItems category={activeCategory} />
    </>
  );
}
