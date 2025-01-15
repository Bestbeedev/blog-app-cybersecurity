import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Article } from "@/types/customTypes";  
export default function ArticlesHandler() {
  const location = useLocation();

  useEffect(() => {
    console.log("location data", location);
  }, [location]);

  const { article } = location.state || {};
  let parsedArticle: Article = {
    id: "",
    image: "",
    title: "",
    desc: "",
    content: "",
    sujet: "",
    _uploadedAt: "",
  };
  if (article) {
    try {
      const parsed =
        typeof article === "string" ? JSON.parse(article) : article;
      parsedArticle = parsed;
    } catch (error) {
      console.error("Error parsing article:", error);
    }
  }

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center my-10  px-10 lg:px-24 mx-auto">
        <div className="flex flex-col space-y-2">
          <img
            className="w-full h-[30rem] rounded-lg items-center object-cover"
            src={parsedArticle.image}
            alt={parsedArticle.title}
          />
          <h2 className="text-3xl">{parsedArticle.title}</h2>
          <p className="text-xl">{parsedArticle.desc}</p>
          <p className="text-md my-3">{parsedArticle.content}</p>
        </div>
      </div>
    </div>
  );
}
