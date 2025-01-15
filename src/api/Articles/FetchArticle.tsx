
import useArticleStore from "@/store/article";
import { useEffect } from "react";

export const useFetchArticles = () => {
  const { setArticles } = useArticleStore();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`${API_URL}/articles`);
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchArticles();
  }, [API_URL, setArticles]);
};