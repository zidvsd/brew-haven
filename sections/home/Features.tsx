import menuCards from "@/data/menuCards.json";
export default function Features() {
  return (
    <div className="custom-container gap-y-8 flex flex-col py-16 items-center justify-center">
      <h1 className="text-blackCoffee  font-playfair text-center font-bold text-4xl">
        What Makes Us Special
      </h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-4 w-full">
        {menuCards.map((card, index) => (
          <div
            key={index}
            className="rounded-md flex flex-col bg-coffeeLight shadow-md rounded-tr-md rounded-tl-md"
          >
            <div className="h-auto md:h-48 lg:h-72 w-full overflow-hidden rounded-tr-md rounded-tl-md">
              <img
                className="w-full h-full object-cover rounded-tr-md rounded-tl-md hover-utility hover:scale-105"
                src={card.image}
                alt={card.title || ""}
              />
            </div>
            <div className="flex flex-col items-start p-8 md:p-4 lg:p-6">
              <h3 className="text-blackCoffee font-playfair font-bold text-xl ">
                {card.title}
              </h3>
              <p className="mt-2 not-only:font-inter text-grayCoffee">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
