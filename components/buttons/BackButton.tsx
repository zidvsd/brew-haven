import { ChevronLeft } from "lucide-react";
import Link from "next/link";
interface BackButtonProps {
  text: string;
  path: string;
}

export default function BackButton({ text, path }: BackButtonProps) {
  return (
    <Link
      href={path}
      className="text-blackCoffee flex flex-row-reverse hover-utility  hover:text-coffeeLight text-sm hover:bg-coffeeMedium w-fit cursor-pointer rounded-lg py-2 px-6 font-semibold font-inter items-center gap-x-2"
    >
      {text}
      <ChevronLeft />
    </Link>
  );
}
