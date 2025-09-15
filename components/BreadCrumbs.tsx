"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize } from "@/lib/utils";

export default function BreadCrumbs() {
  const pathName = usePathname();

  // parts you don't want to appear in breadcrumbs
  const excluded = ["coffee", "pastries", "seasonal"];

  // split path and filter out excluded ones
  const parts = pathName
    .split("/")
    .filter((part) => part && !excluded.includes(part.toLowerCase()));

  return (
    <nav className="font-inter text-sm flex space-x-2">
      <Link
        href="/"
        className="text-grayCoffee hover:text-espresso hover-utility"
      >
        Home
      </Link>
      {parts.map((part, i) => {
        const href = `/${parts.slice(0, i + 1).join("/")}`;
        const isLast = i === parts.length - 1;

        return (
          <span key={i}>
            /{" "}
            {isLast ? (
              <span className="hover:text-espresso hover-utility">
                {capitalize(part)}
              </span>
            ) : (
              <Link
                href={href}
                className="text-grayCoffee hover:text-espresso hover-utility"
              >
                {capitalize(part)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
