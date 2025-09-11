import Image from "next/image";
import ExploreButton from "@/components/buttons/ExploreButton";
export default function Hero() {
  return (
    <section className="relative w-full h-[600px]">
      {/* Background Image */}
      <Image
        src="/img/hero-coffee-CWJHnF8W.jpg"
        alt="Premium coffee beans"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40">
        <div className="custom-container h-full flex flex-col items-start justify-center md:items-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair">
            Welcome to Brew Haven
          </h1>
          <p className="text-lg md:text-xl font-inter text-left md:text-center">
            Where every cup tells a story of passion, craft, and community
          </p>
          <ExploreButton />
        </div>
      </div>
    </section>
  );
}
