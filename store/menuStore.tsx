import { create } from "zustand";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  category: string;
  ingredients?: string[];
  caffeine?: string;
  calories?: string;
  brewTime?: string;
  temperature?: string;
  rating?: number;
  reviews?: number;
  origin?: string;
  notes?: string;
  favorite?: boolean;
  image: string;
};
interface MenuStore {
  menu: (MenuItem & { slug: string })[];
  loading: boolean;
  fetchMenu: () => Promise<void>;
}

const useMenuStore = create<MenuStore>((set) => ({
  menu: [],
  loading: true,
  fetchMenu: async () => {
    set({ loading: true });
    try {
      // ⏳ Artificial 3s delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const res = await fetch("/data.json");
      const data = await res.json();

      const menuArray: (MenuItem & { slug: string })[] = Object.entries(
        data
      ).map(([slug, card]) => ({
        slug,
        ...(card as MenuItem),
      }));

      set({ menu: menuArray, loading: false });
      console.log(menuArray);
    } catch (error) {
      console.error("Failed to fetch menu", error);
      set({ loading: false });
    }
  },
}));
export default useMenuStore;
