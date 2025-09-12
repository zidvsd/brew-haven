// components/ClientProvider.tsx
"use client"; // ✅ client component for Zustand/hooks
import { ProgressProvider } from "@bprogress/next/app";
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

  return (
    <ProgressProvider
      height="2px"
      color="hsl(25 45% 25%)"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
