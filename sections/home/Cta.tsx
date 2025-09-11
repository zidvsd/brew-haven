import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
export default function Cta() {
  return (
    <div className="flex py-12  flex-col gap-y-8 md:flex-row items-start custom-container justify-evenly font-inter">
      <div className="flex flex-row items-center gap-x-4 ">
        <div className="bg-foam p-2 rounded-md">
          <Clock className="stroke-espresso size-8" />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-blackCoffee font-bold">Open Daily</h1>
          <p className="text-grayCoffee">Mon-Fri: 6:30 AM - 8:00 PM</p>
          <p className="text-grayCoffee">Sat-Sun: 7:00 AM - 9:00 PM</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-4 ">
        <div className="bg-foam p-2 rounded-md">
          <MapPin className="stroke-espresso size-8" />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-blackCoffee font-bold">Find Us</h1>
          <p className="text-grayCoffee">123 Coffee Lane</p>
          <p className="text-grayCoffee">Calamba, Laguna 4027</p>
        </div>
      </div>
    </div>
  );
}
