"use client";

import { notFound } from "next/navigation";
import useMenuStore from "@/store/menuStore";
import { use } from "react";

export default function MenuItemPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = use(params);

  const { menu } = useMenuStore();

  const item = menu.find((i) => i.slug === slug);

  if (!item) return notFound();

  return (
    <div className="custom-container py-16">
      <h1 className="text-3xl font-bold font-playfair">{item.name}</h1>
      <p className="text-lg text-grayCoffee">{item.description}</p>
      <p className="text-xl font-semibold mt-4">{item.price}</p>
      <ul className="mt-6 list-disc pl-6">
        {item.ingredients?.map((ing: string, idx: number) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
    </div>
  );
}
