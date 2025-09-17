"use client";
import { motion } from "framer-motion";
import {
  containerVariants,
  leftVariants,
  rightVariants,
} from "@/lib/animationVariants";
import { MapPin, Phone, Mail, Clock8, Clock9, Coffee } from "lucide-react";
export default function AboutContact() {
  return (
    <motion.div
      variants={containerVariants}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col custom-container py-16"
    >
      <h1 className="font-playfair font-bold text-5xl text-center mb-8">
        Visit Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-start md:place-items-center gap-8">
        {/* get in touch */}
        <motion.div
          variants={leftVariants}
          className="flex flex-col space-y-4 font-inter"
        >
          <h2 className="font-playfair text-2xl font-bold">Get in Touch</h2>
          <div className="flex flex-row gap-x-4 ">
            <MapPin className="text-espresso size-5 mt-1" />
            <div className="flex flex-col text-md">
              <h4 className="font-bold">Address</h4>
              <p>123 Coffee Lane</p>
              <p>Portland, OR 97201</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 ">
            <Phone className="text-espresso size-5 mt-1" />
            <div className="flex flex-col text-md">
              <h4 className="font-bold">Phone</h4>
              <p>(503) 555-0100</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 ">
            <Mail className="text-espresso size-5 mt-1" />
            <div className="flex flex-col text-md">
              <h4 className="font-bold">Email</h4>
              <p>hello@brewhaven.com</p>
            </div>
          </div>
        </motion.div>
        {/* hours of operation */}
        <motion.div
          variants={rightVariants}
          className="flex flex-col space-y-4 font-inter w-full lg:max-w-lg"
        >
          <h2 className="font-playfair text-2xl font-bold">
            Hours of Operation
          </h2>
          <div className="flex flex-row gap-x-4 w-full lg:max-w-lg  py-2 items-center ">
            <Clock8 className="text-espresso size-5 mt-1" />
            <div className="flex flex-row text-md justify-between w-full border-b  border-b-gray-200">
              <h4 className="font-bold">Monday - Friday</h4>
              <p className="text-grayCoffee">6:30 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 w-full lg:max-w-lg  py-2 items-center ">
            <Clock9 className="text-espresso size-5 mt-1" />
            <div className="flex flex-row text-md justify-between w-full border-b  border-b-gray-200">
              <h4 className="font-bold">Saturday</h4>
              <p className="text-grayCoffee">7:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="flex flex-row gap-x-4 w-full lg:max-w-lg py-2 items-center ">
            <Clock9 className="text-espresso size-5 mt-1" />
            <div className="flex flex-row text-md justify-between w-full ">
              <h4 className="font-bold">Sunday</h4>
              <p className="text-grayCoffee">7:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="rounded-lg bg-accentHome/20 py-2 px-4 flex gap-x-2 mt-4 items-center max-w-lg">
            <Coffee className="text-espresso" />
            <span className="text-accentHome font-semibold text-sm">
              Happy Hour: 2-4 PM Daily - 20% off all pastries!
            </span>{" "}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
