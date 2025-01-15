import  useProductStore  from "@/store/product";
import { useEffect } from "react";

export const useFetchProduct = () => {
  const { setProducts } = useProductStore();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/produits`);
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProduct();
  }, [API_URL, setProducts]);
};