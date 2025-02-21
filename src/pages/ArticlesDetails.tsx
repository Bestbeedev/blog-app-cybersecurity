import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { Article } from "@/types/customTypes";
import useArticleStore from "@/store/article";
import { Badge } from "@/components/ui/badge";
import { useFetchArticles } from "@/api/Articles/FetchArticle";
export default function ArticlesHandler() {
  const location = useLocation();

  const { article } = location.state || {};
  const [parsedArticle, setParsedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (article) {
      try {
        const parsed =
          typeof article === "string" ? JSON.parse(article) : article;
        setParsedArticle(parsed);
      } catch (error) {
        console.error("Error parsing article:", error);
      }
    }
  }, [location, article]);
  useFetchArticles();
  const { articles } = useArticleStore();
  const navigate = useNavigate();
  const handleArticleDetail = (article: Article) => {
    const pathname = `/blogs/${article.id}`;
    const search = `?article=${article.id}`;
    const hash = `#details`;
    navigate(pathname + search + hash, {
      replace: true,
      state: { article: JSON.stringify(article) },
    });
  };

return (
  <>
    {parsedArticle && (
      <div className="mx-auto bg-neutral-800 relative isolate max-w-7xl py-10 px-4 sm:px-6 sm:py-20 lg:px-20">
        {/* Background blur */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* Contenu */}
        <div className="w-full flex flex-col lg:flex-row gap-6">
          {/* Article principal */}
          <div className="flex flex-col mx-auto max-w-4xl space-y-5">
            <img
              className="w-full h-60 sm:h-72 md:h-96 lg:h-[30rem] rounded-lg object-cover"
              src={parsedArticle.image}
              alt={parsedArticle.title}
            />
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-50">
              {parsedArticle.title}
            </h2>
            <p className="text-lg sm:text-xl text-neutral-100">{parsedArticle.desc}</p>
            <p className="text-md text-neutral-200 p-5 sm:p-10 bg-neutral-700 rounded-lg">
              {parsedArticle.content}
            </p>
          </div>

          {/* Sidebar - Articles récents */}
          <div className="w-full lg:max-w-xs xl:max-w-sm p-6 sm:p-12 rounded-lg bg-neutral-700 sticky top-0 self-start">
            <h1 className="text-2xl sm:text-3xl text-neutral-50">Articles récents</h1>
            <div className="py-5 space-y-4">
              {articles
                .sort(
                  (a, b) =>
                    new Date(b._uploadedAt).getTime() -
                    new Date(a._uploadedAt).getTime()
                )
                .slice(0, 4)
                .map((article) => (
                  <div
                    onClick={() => handleArticleDetail(article)}
                    className="p-3 border-neutral-600 bg-neutral-700 hover:border hover:border-neutral-500 cursor-pointer border rounded-lg flex items-center space-x-4"
                    key={article.id}
                  >
                    <img
                      className="rounded-lg h-16 w-16 sm:h-20 sm:w-20 object-cover"
                      src={article.image}
                      alt={article.title}
                    />
                    <div className="flex-col space-y-2">
                      <div className="flex justify-between space-x-2">
                        <time
                          dateTime={article._uploadedAt}
                          className="text-neutral-300 text-sm"
                        >
                          {new Date(article._uploadedAt).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </time>
                        <Badge variant="destructive" className="text-neutral-100">
                          {article.sujet}
                        </Badge>
                      </div>
                      <h1 className="text-neutral-100 text-sm sm:text-md">{article.title}</h1>
                      <p className="text-xs sm:text-sm text-neutral-200">{article.desc}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Background blur bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    )}
  </>
);

}
