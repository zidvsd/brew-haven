"use client";

import { notFound } from "next/navigation";
import useMenuStore from "@/store/menuStore";
import BreadCrumbs from "@/components/BreadCrumbs";
import BackButton from "@/components/buttons/BackButton";
import { Star, Clock } from "lucide-react";
import { use } from "react"; // <-- needed to unwrap promise

export default function MenuItemPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  // unwrap the params promise
  const { category, slug } = use(params);

  const { menu } = useMenuStore();

  const item = menu.find((i) => i.slug === slug);

  if (!item) return notFound();

  return (
    <div className="custom-container pt-8 font-inter pb-16 ">
      <BreadCrumbs />
      <div className="mt-12">
        <BackButton text="Back to Menu" path="/menu" />
      </div>

      {/* item container */}
      <div className="mt-8 bg-coffeeLight rounded-xl shadow-md overflow-hidden max-w-3xl mx-auto">
        {/* Image */}
        <div className="relative">
          <img
            src={item.image || "/img/default.jpg"}
            alt={item.name}
            className="w-full h-72 object-cover"
          />
          {item.category && (
            <span className="absolute top-4 right-4 text-espresso bg-coffeeLight font-semibold text-xs px-3 py-1 rounded-full">
              {item.category}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold font-playfair">{item.name}</h1>
            <p className="text-xl text-espresso font-semibold">{item.price}</p>
          </div>
          <p className="text-grayCoffee mt-2">{item.description}</p>

          {/* Rating & Brew Time */}
          {item.rating && item.brewTime && (
            <div className="flex items-center gap-x-4 mt-2 text-sm text-grayCoffee">
              <div className="flex flex-row items-center space-x-1">
                <Star className="text-accentHome fill-accentHome size-5" />
                <span className="flex flex-row items-center ">
                  <span className="font-bold text-blackCoffee ">
                    {" "}
                    {item.rating}
                  </span>
                  ({item.reviews || 0} reviews)
                </span>
              </div>
              <div className="flex flex-row items-center space-x-1">
                <Clock className="size-4" />
                <span className=" ">{item.brewTime}</span>
              </div>
            </div>
          )}

          {/* Ingredients & Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h2 className="font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc pl-5 text-grayCoffee space-y-2 marker:text-espresso">
                {item.ingredients?.map((ing: string, idx: number) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Details</h2>
              <ul className="list-disc  text-grayCoffee marker:text-espresso space-y-2">
                {item.caffeine && (
                  <li className="flex justify-between">
                    <span>Caffeine:</span>
                    <span>{item.caffeine}</span>
                  </li>
                )}
                {item.calories && (
                  <li className="flex justify-between">
                    <span>Calories:</span>
                    <span>{item.calories}</span>
                  </li>
                )}
                {item.temperature && (
                  <li className="flex justify-between">
                    <span>Serving Temp:</span>
                    <span>{item.temperature}</span>
                  </li>
                )}
                {item.origin && (
                  <li className="flex justify-between">
                    <span>Origin:</span>
                    <span>{item.origin}</span>
                  </li>
                )}
                {item.allergens && item.allergens.length > 0 && (
                  <li className="flex justify-between">
                    <span>Allergen:</span>
                    <span>{item.allergens.join(", ")}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Tasting Notes */}
          {item.notes && (
            <div className="bg-foam p-4 rounded-lg mt-6 text-blackCoffee">
              <h3 className="font-semibold mb-1">Tasting Notes</h3>
              <p className="italic text-grayCoffee">"{item.notes}"</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-espresso text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-transform">
              Add to Cart
            </button>
            <button className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:opacity-90 hover:scale-105 transition-transform">
              View More Items
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
