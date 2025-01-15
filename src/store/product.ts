import {create} from "zustand";
import {Produits} from "@/types/customTypes";
interface ProductState {
  products: Produits[];
  setProducts: (products: Produits[]) => void;
}

const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));

export default useProductStore;