import {create} from "zustand";
import {Article} from "@/types/customTypes";
interface ArticleState {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}

const useArticleStore = create<ArticleState>((set) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));

export default useArticleStore;


