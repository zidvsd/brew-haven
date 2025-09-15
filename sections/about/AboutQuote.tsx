import Image from "next/image";

export default function AboutQuote() {
  return (
    <div className="relative h-72">
      <Image
        src="/img/latte-art-CTZiS9hB.jpg"
        alt="latte-art"
        fill
        className="object-cover"
      />

      {/* White gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white to-transparent" />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col text-center items-center space-y-4">
        <h2 className="font-playfair text-blackCoffee text-center text-2xl italic">
          "Every cup is a canvas, every sip a story."
        </h2>
        <span className="text-grayCoffee font-inter">— Our Master Barista</span>
      </div>
    </div>
  );
}
