import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function ViewMenuButton() {
  return (
    <Link
      href={"/menu"}
      className="bg-espresso hover-utility hover:opacity-90 hover:scale-105 text-white cursor-pointer rounded-lg py-3 px-6 font-semibold font-inter flex flex-row items-center gap-x-2"
    >
      View Full Menu
      <ArrowRight />
    </Link>
  );
}
