import Hero from "@/sections/home/Hero";
import Features from "@/sections/home/Features";
import Favorites from "@/sections/home/Favorites";
import Cta from "@/sections/home/Cta";
import Carousel from "@/sections/home/Carousel";
export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <Features />
      <Favorites />
      <Cta />
    </div>
  );
}
