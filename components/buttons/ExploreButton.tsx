import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function ExploreButton() {
  return (
    <Link
      href={"/menu"}
      className="bg-accent hover-utility  hover:scale-105 hover:opacity-90 cursor-pointer rounded-lg py-3 px-6 font-semibold font-inter flex flex-row items-center gap-x-2"
    >
      Explore Our Menu
      <ArrowRight />
    </Link>
  );
}
