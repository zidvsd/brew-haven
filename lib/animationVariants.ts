import { Variants } from "framer-motion";
export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
export const itemVariants: Variants = {
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

export const leftVariants: Variants = {
  hidden: { opacity: 0, x: -100 }, // start off left
  visible: {
    opacity: 1,
    x: 0, // move into place
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const rightVariants: Variants = {
  hidden: { opacity: 0, x: 100 }, // start off right
  visible: {
    opacity: 1,
    x: 0, // move into place
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
