"use client";
import { motion } from "framer-motion";
import menuCards from "@/data/menuCards.json";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/lib/animationVariants";
export default function Features() {
  const containerVariants = {};
  return (
    <div className="custom-container gap-y-8 flex flex-col py-16 items-center justify-center">
      <h1 className="text-blackCoffee  font-playfair text-center font-bold text-4xl">
        What Makes Us Special
      </h1>
      <motion.div
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="grid md:grid-cols-3 gap-8 md:gap-4 w-full"
      >
        {menuCards.map((card, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className="rounded-md flex flex-col bg-coffeeLight shadow-md rounded-tr-md rounded-tl-md"
          >
            <div className="relative h-48 md:h-48 lg:h-72 w-full overflow-hidden rounded-tr-md rounded-tl-md">
              <Image
                src={card.image}
                alt={card.title || ""}
                fill
                className="object-cover hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-col items-start p-8 md:p-4 lg:p-6">
              <h3 className="text-blackCoffee font-playfair font-bold text-xl ">
                {card.title}
              </h3>
              <p className="mt-2 not-only:font-inter text-grayCoffee">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
