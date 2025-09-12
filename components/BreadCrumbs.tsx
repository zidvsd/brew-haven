import Link from "next/link";
import { usePathname } from "next/navigation";
import { capitalize } from "@/lib/utils";
export default function BreadCrumbs() {
  const pathName = usePathname();
  const parts = pathName.split("/").filter(Boolean);

  return (
    <nav className="text-sm flex space-x-2">
      <Link href="/">Home</Link>
      {parts.map((part, i) => (
        <span key={i}>
          /{" "}
          <Link href={`/${parts.slice(0, i + 1).join("/")}`}>
            {capitalize(part)}
          </Link>
        </span>
      ))}
    </nav>
  );
}
