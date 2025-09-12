"use client";
import { Star } from "lucide-react";
import useMenuStore from "@/store/menuStore";
import ViewMenuButton from "@/components/buttons/ViewMenuButton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Favorites() {
  const menu = useMenuStore((state) => state.menu);
  const loading = useMenuStore((state) => state.loading);

  const filteredFavorites = menu.filter((item) => item.favorite === true);

  return (
    <div className="bg-foam">
      <div className="custom-container gap-y-12 flex flex-col py-16 items-center justify-center">
        <div className="space-y-2">
          <h1 className="text-blackCoffee font-playfair text-center font-bold text-4xl">
            Customer Favorites
          </h1>
          <p className="text-grayCoffee text-md font-inter">
            Our most loved drinks, crafted to perfection
          </p>
        </div>

        <div className="grid font-inter md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-6 w-full">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={i}
                    className="bg-coffeeLight p-4 rounded-lg shadow-md gap-y-4 flex flex-col items-start animate-pulse"
                  >
                    <Skeleton width={120} height={20} />
                    <Skeleton count={2} width="100%" />
                    <Skeleton width={60} height={20} />
                  </div>
                ))
            : filteredFavorites.map((card, index) => (
                <div
                  key={index}
                  className="bg-coffeeLight p-4 rounded-lg shadow-md gap-y-4 flex flex-col items-start hover-utility hover:shadow-xl hover:transform hover:-translate-y-2"
                >
                  <div className="flex flex-row items-center w-full justify-between">
                    <h1 className="text-blackCoffee font-semibold">
                      {card.name}
                    </h1>
                    <Star className="fill-accentHome text-accentHome size-5" />
                  </div>
                  <p className="text-sm text-grayCoffee">{card.description}</p>
                  <h2 className="text-espresso font-bold">{card.price}</h2>
                </div>
              ))}
        </div>

        <ViewMenuButton />
      </div>
    </div>
  );
}
