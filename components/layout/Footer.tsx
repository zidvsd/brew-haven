"use client";

import { Coffee, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-white py-10 font-inter">
      <div className="custom-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-x-2 mb-2 ">
            <Coffee className="w-6 h-6 text-white" />
            <h2 className="text-xl font-bold font-playfair">Brew Haven</h2>
          </div>
          <p className="text-sm text-softCoffee">
            Crafting exceptional coffee experiences since 2020. Every cup tells
            a story.
          </p>
        </div>

        {/* Visit Us */}
        <div>
          <h3 className="font-semibold font-playfair text-white mb-3 text-lg">
            Visit Us
          </h3>
          <div className="flex items-center gap-x-2 mb-2 text-softCoffee">
            <MapPin className="w-5 h-5 text-white" />
            <span className="text-sm">123 Coffee Lane, Portland, OR 97201</span>
          </div>
          <div className="flex items-center gap-x-2 text-softCoffee">
            <Phone className="w-5 h-5 text-white" />
            <span className="text-sm">(503) 555-0100</span>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-semibold font-playfair text-white mb-3 text-lg">
            Hours
          </h3>
          <div className="flex items-center gap-x-2 text-softCoffee">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-sm">Mon-Fri: 6:30 AM - 8:00 PM</span>
          </div>
          <div className="flex items-center gap-x-2 mt-1 text-softCoffee">
            <Clock className="w-5 h-5 text-white" />
            <span className="text-sm">Sat-Sun: 7:00 AM - 9:00 PM</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-softCoffee">
        © 2024 Brew Haven. All rights reserved.
      </div>
    </footer>
  );
}
