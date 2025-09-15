"use client";

import { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import useMenuStore from "@/store/menuStore";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ViewMenuButton from "@/components/buttons/ViewMenuButton";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
export default function Carousel() {
  const { menu, loading } = useMenuStore();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1, spacing: 16 }, // mobile-first default
    breakpoints: {
      "(min-width: 769px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(min-width: 1025px)": {
        slides: { perView: 3, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 16 },
      },
    },
  });
  if (loading) {
    return (
      <div className="bg-coffeeLight">
        <div className="relative w-full py-16 mx-auto font-inter custom-container text-center items-center">
          <h1 className="font-playfair font-bold text-5xl">
            A Brew To Beat The Blues
          </h1>
          <p className="max-w-2xl text-grayCoffee font-inter mx-auto mt-4">
            Fuel your day with a dose of Brew Haven Coffee. Whatever your diet
            or preferences, there's something for everyone.
          </p>

          {/* Skeleton Carousel */}
          <div className="keen-slider mt-8" ref={sliderRef}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="keen-slider__slide bg-foam rounded-lg p-4 flex flex-col"
              >
                <Skeleton height={288} className="rounded-xl" /> {/* h-72 */}
                <Skeleton width={150} height={24} className="mt-3" />
                <Skeleton width={`80%`} height={16} />
                <Skeleton width={`60%`} height={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-coffeeLight">
      <div className="relative w-full py-16 mx-auto font-inter custom-container text-center items-center">
        <h1 className="font-playfair font-bold text-5xl">
          A Brew To Beat The Blues
        </h1>
        <p className="max-w-2xl text-grayCoffee font-inter mx-auto mt-4">
          Fuel your day with a dose of Brew Haven Coffee. Whatever your diet or
          preferences, there's something for everyone.
        </p>
        {/* Carousel */}

        <div ref={sliderRef} className="keen-slider mt-8">
          {menu.map((item) => (
            <div
              key={item.slug}
              className="keen-slider__slide bg-foam rounded-lg  p-4 flex flex-col  ease-in-out "
            >
              <Link href={`/menu/${item.category}/${item.slug}`}>
                <div className="relative w-full  h-72 rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-espresso font-bold text-white px-2 py-1 text-sm rounded-full">
                    {item.price}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-lg text-left">
                  {item.name}
                </h3>
                <p className="text-grayCoffee text-sm flex-grow text-left">
                  {item.description}
                </p>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.category && (
                    <span className="bg-coffeeMedium font-bold text-espresso  px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <ArrowLeft
          className="hidden lg:flex lg:absolute size-8 border border-gray-100 
             left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2
             cursor-pointer"
          onClick={() => instanceRef.current?.prev()}
        />

        <ArrowRight
          className="hidden lg:flex lg:absolute size-8 border border-gray-100 
             right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full p-2
             cursor-pointer"
          onClick={() => instanceRef.current?.next()}
        />
        <div className="flex justify-center mt-8">
          <ViewMenuButton />
        </div>
      </div>
    </div>
  );
}
