"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize } from "@/lib/utils";

export default function BreadCrumbs() {
  const pathName = usePathname();
  const parts = pathName.split("/").filter(Boolean);

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
              <span className="hover:text-espresso hover-utility ">
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
