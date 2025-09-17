"use client";
import { Heart, Users, Leaf, Award } from "lucide-react";
import valuesData from "@/data/values.json";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "@/lib/animationVariants";
const icons = [Heart, Users, Leaf, Award];

export default function AboutValues() {
  return (
    <div className="bg-coffeeLight">
      <div className="flex flex-col custom-container py-16">
        <h1 className="font-playfair font-bold text-5xl text-center mb-8">
          Our Values
        </h1>
        <motion.div
          variants={containerVariants}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {valuesData.values.map((value, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex flex-col items-center gap-4 p-6  text-center "
              >
                <div className="p-4 bg-coffeeMedium rounded-full">
                  <Icon className="size-8 text-espresso" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold font-playfair text-blackCoffee">
                    {value.title}
                  </h3>
                  <p className="text-grayCoffee font-inter ">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
