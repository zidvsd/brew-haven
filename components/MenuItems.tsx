"use client";
import useMenuStore from "@/store/menuStore";
import Link from "next/link";
import Image from "next/image";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";

export default function MenuItems({ category }: { category: string }) {
  const { menu, loading } = useMenuStore(); // ✅ make sure loading exists in your store
  const filteredCategory = menu.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className="bg-beige">
      <div className="flex flex-col gap-y-8 mx-auto py-16 custom-container max-w-5xl">
        {loading ? (
          Array(4)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="rounded-lg flex flex-col sm:flex-row shadow-sm bg-coffeeLight font-inter items-stretch md:max-h-40 p-4"
              >
                {/* Skeleton Image */}
                <div className="w-full sm:w-1/4 h-32 sm:h-auto">
                  <Skeleton height="100%" />
                </div>

                {/* Skeleton Info */}
                <div className="flex flex-col gap-y-4 py-4 px-6 flex-1">
                  <div className="flex flex-row gap-x-4 items-center">
                    <Skeleton width={140} height={24} />
                    <Skeleton width={60} height={24} />
                  </div>
                  <Skeleton count={2} />
                </div>
              </div>
            ))
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible" // triggers animation when in viewport
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-y-8"
          >
            {filteredCategory.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Link
                  href={`/menu/${item.category}/${item.slug}`}
                  className="rounded-lg flex flex-col sm:flex-row shadow-sm bg-coffeeLight font-inter hover-utility hover:shadow-xl hover:scale-102 items-stretch md:max-h-40"
                >
                  <Image
                    src={item.image}
                    alt={item.name || ""}
                    width={300}
                    height={128}
                    className="w-full sm:w-1/4 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg object-cover h-32 sm:h-auto"
                  />
                  <div className="flex flex-col gap-y-4 py-8 px-8 md:py-4">
                    <div className="flex flex-row gap-x-4 items-center">
                      <h1 className="font-bold text-blackCoffee text-xl">
                        {item.name}
                      </h1>
                      <p className="text-espresso font-semibold text-xl">
                        {item.price}
                      </p>
                    </div>
                    <p className="text-grayCoffee">{item.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
