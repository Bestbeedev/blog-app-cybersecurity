import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate } from "react-router-dom";
import { LuCloudUpload } from "react-icons/lu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import type { Article } from "@/types/customTypes";
import useArticleStore from "@/store/article";
import { Badge } from "@/components/ui/badge";
import { useFetchArticles } from "@/api/Articles/FetchArticle";

export default function ArticlesCards() {
  const navigate = useNavigate();
  const handleCheckDetail = () => {
    const pathname = `/blogs`;
    const search = `?article`;
    const hash = `#all`;
    navigate(pathname + search + hash, {
      replace: true,
    });
  };
  return (
    <div className="w-full relative isolate py-6 shadow-xl bg-neutral-900">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative right-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="flex relative z-40 w-full max-w-6xl items-center mx-auto px-10 justify-between">
        <h1 className="text-3xl my-5 text-white  text-start"> Articles</h1>
        <Badge
          onClick={handleCheckDetail}
          variant={"outline"}
          className="  text-white cursor-pointer p-2 px-3 h-fit hover:bg-neutral-50 hover:text-neutral-700   rounded-lg"
        >
          Voir toutes les articles
        </Badge>
      </div>

      <div className="flex pb-9 justify-center">
        <CarouselSize />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative right-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export function CarouselSize() {
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

  const splitWord = (text: string, maxLength: number = 70) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  if (!articles) {
    return (
      <div className="w-full max-w-6xl  px-8">
        <div className="flex flex-wrap">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="md:basis-1/2 lg:basis-1/3 p-1">
              <Card className="relative bg-neutral-700 border-neutral-600">
                <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                  <Skeleton className="h-64 w-full rounded-lg" />
                  <div className="flex my-3 mx-3 space-x-2">
                    <Skeleton className="h-6 w-24 rounded-md" />
                    <Skeleton className="h-6 w-24 rounded-md" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full z-50 max-w-6xl px-8"
    >
      <CarouselContent>
        {articles
          .sort(
            (a, b) =>
              new Date(b._uploadedAt).getTime() -
              new Date(a._uploadedAt).getTime()
          )
          .slice(0, 3)
          .map((article) => (
            <CarouselItem
              key={article.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1 z-50 cursor-pointer">
                <Card
                  onClick={() => handleArticleDetail(article)}
                  className="relative pb-20  border-transparent hover:border-opacity-100 bg-transparent hover:border-neutral-500 hover:translate-y-1 transition-all shadow-none"
                >
                  <Badge
                    variant={"outline"}
                    className="absolute border-none top-4 z-50 text-white left-3 bg-blue-500 px-3 py-2 rounded-lg"
                  >
                    {article.sujet}
                  </Badge>
                  <CardContent className="flex flex-col text-white aspect-square items-start justify-center p-6">
                    <div className="absolute top-2 cursor-pointer right-2 left-2">
                      <img
                        src={article.image}
                        className="rounded-lg max-sm:h-72 max-md:h-96 object-cover h-48 w-full"
                      />

                      <div className="flex flex-col mx-3">
                        <div className="text-xl my-2 text-start flex font-semibold">
                          {splitWord(article.title)}
                        </div>
                        <h2 className="text-sm text-start flex my-1 font-medium">
                          {article.desc}
                        </h2>
                        <div className="flex flex-col pb-4 items-start space-y-3">
                          <p className="text-sm flex items-center space-x-2 text-neutral-200 mt-2">
                            <LuCloudUpload size={16} className="mr-1" />
                            {new Date(article._uploadedAt).toLocaleDateString(
                              "fr-FR",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }
                            )}
                          </p>
                          <Button
                            className="my-2"
                            variant={"destructive"}
                            onClick={() => handleArticleDetail(article)}
                          >
                            Voir plus →
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
