"use client";
import useMenuStore from "@/store/menuStore";
import Link from "next/link";
export default function MenuItems({ category }: { category: string }) {
  const { menu } = useMenuStore();
  const filteredCategory = menu.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="bg-beige ">
      <div className="flex flex-col gap-y-8 mx-auto py-16 custom-container max-w-5xl">
        {filteredCategory.map((item, index) => (
          <Link
            key={index}
            href={`/menu/${item.category}/${item.slug}`}
            className="rounded-lg flex flex-col sm:flex-row shadow-sm bg-coffeeLight font-inter hover-utility hover:shadow-xl hover:scale-102 items-stretch md:max-h-40"
          >
            <img
              className="w-full sm:w-1/4 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-bl-lg object-cover h-32 sm:h-auto"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col gap-y-4 py-8 px-8 md:py-4 ">
              <div className="flex flex-row gap-x-4 items-center">
                <h1 className="font-bold text-blackCoffee text-xl">
                  {item.name}
                </h1>
                <p className="text-espresso font-semibold text-xl">
                  {item.price}
                </p>
              </div>
              <p className="text-grayCoffee">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
