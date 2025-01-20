import type { Article } from "@/types/customTypes";
import { useNavigate } from "react-router-dom";
import useArticleStore from "@/store/article";
import { useFetchArticles } from "@/api/Articles/FetchArticle";
import { Button } from "@/components/ui/button";
import HeaderTop from "@/components/common/customUI/HeaderTop";

export default function ArticlesPage() {
  return (
    <div
      className="bg-gradient-to-l top-0 right-0 
    relative text-white h-fit from-neutral-800 via-neutral-700 to-neutral-800"
    >
      <HeaderTop
        desc="Plongez dans nos articles rédigés par des experts pour comprendre les enjeux de la cybersécurité et découvrir des conseils pratiques pour vous protéger."
        title="Articles, conseils et actualités : tout sur la cybersécurité"
      />
      <Article />
    </div>
  );
}

export function Article() {
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
    console.log(JSON.stringify(article));
  };
  const splitWord = (text: string, maxLength: number = 150) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto text-white max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-start relative lg:mx-0">
          <h2 className="text-pretty mx-auto text-4xl lg:max-w-5xl  font-semibold tracking-tight text-neutral-50 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 lg:max-w-5xl mx-auto text-neutral-50">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="mx-auto mt-10  max-w-5xl grid grid-cols-1 gap-x-10  sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-10  gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-auto lg:max-w-5xl">
          {articles.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col p-2 hover:border-neutral-600 hover:-translate-y-4 transition cursor-pointer hover:bg-neutral-700 hover:border hover:shadow-lg rounded-lg  mx-auto max-w-5xl items-start"
            >
              <div>
                <img
                  alt=""
                  src={blog.image}
                  className="  h-60 w-full object-cover rounded-lg bg-gray-50"
                />
              </div>
              <div className="flex items-start px-3 my-3 text-white  flex-col">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={blog._uploadedAt} className="text-gray-500">
                    {new Date(blog._uploadedAt).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <p
                    onClick={() => handleArticleDetail(blog)}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.sujet}
                  </p>
                </div>
                <div className="group  border-b border-gray-200 pb-3 relative">
                  <h3 className="mt-2 text-lg/6 font-semibold text-neutral-50 group-hover:text-yellow-500">
                    <h1 onClick={() => handleArticleDetail(blog)}>
                      <span className="absolute text-neutral-50 inset-0" />
                      {blog.title}
                    </h1>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm/6 text-neutral-50">
                    {blog.desc}
                  </p>
                </div>

                <div className="flex space-y-2 w-fit flex-col">
                  <p className="text-neutral-50 pt-4">
                    {splitWord(blog.content + "" + "voir plus")}
                  </p>
                  <Button
                    variant={"destructive"}
                    onClick={() => handleArticleDetail(blog)}
                    className="relative z-10  w-fit rounded-full hover:bg-red-600 px-3 py-1.5 font-medium text-gray-50 bg-blue-500"
                  >
                    Lire plus
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
