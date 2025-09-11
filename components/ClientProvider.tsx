// components/ClientProvider.tsx
"use client"; // ✅ client component for Zustand/hooks

import { useEffect } from "react";
import useMenuStore from "@/store/menuStore";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const fetchMenu = useMenuStore((state) => state.fetchMenu);

  useEffect(() => {
    fetchMenu(); // fetch menu once on client
  }, [fetchMenu]);

  return <>{children}</>;
}
