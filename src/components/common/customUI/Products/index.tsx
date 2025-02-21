import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { Produits } from "@/types/customTypes";
import { Badge } from "@/components/ui/badge";
import useProductStore from "@/store/product"
import { useFetchProduct } from "@/api/Products/FetchProduct";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component
export default function ProductCards() {
    const navigate = useNavigate();
    const handleAllView = () => {
      const pathname = `/products`;
      const search = `?product`;
      const hash = `#all`;
      navigate(pathname + search + hash, {
        replace: true,
      });
    };
  return (
    <div className="w-full relative overflow-hidden   isolate py-6 bg-gradient-to-l from-neutral-700 via-neutral-900  to-bg-neutral-800 shadow-lg">
      <div
        aria-hidden="true"
        className="absolute overflow-hidden  inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="flex relative z-40 w-full max-w-6xl items-center mx-auto px-10 justify-between">
        <h1 className="text-3xl my-5 text-white  text-start"> Produits</h1>
        <Badge
          variant={"outline"}
          onClick={handleAllView}
          className="  text-white cursor-pointer  p-2 px-3 h-fit hover:bg-neutral-50 hover:text-neutral-700   rounded-lg"
        >
          Voir tout les produits
        </Badge>
      </div>
      <div className="flex relative  pb-9  justify-center">
        {/* <div className="absolute bg-neutral-500 rounded-lg top-5"> */}
        <CarouselSize />
        {/* </div> */}
      </div>
      <div
        aria-hidden="true"
        className="absolute overflow-hidden  inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export function CarouselSize() {
  useFetchProduct()
  const {products} = useProductStore()
  const navigate = useNavigate();
  const handleAddToCart = (product: Produits) => {
    const pathname = `/products/${product.id}`;
    const search = `?products=${product.id}`;
    const hash = `#details`;
    navigate(pathname + search + hash, {
      replace: true,
      state: { article: JSON.stringify(product) },
    });
    console.log(JSON.stringify(product));
  };

    if (!products || products.length === 0) {
      return (
        <div className="w-full max-w-6xl px-8">
          <div className="flex flex-wrap">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="md:basis-1/2 lg:basis-1/3 p-1 max-sm:w-full"
              >
                <Card className="relative bg-neutral-700 border-neutral-600">
                  <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                    <Skeleton className="h-64 bg-neutral-500 w-full rounded-lg" />
                    <div className="flex my-3 mx-3 space-x-2">
                      <Skeleton className="h-6 bg-neutral-500 w-24 rounded-md" />
                      <Skeleton className="h-6 bg-neutral-500 w-24 rounded-md" />
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
        align: "center",
      }}
      className="w-full max-w-6xl px-8"
    >
      <CarouselContent>
        {products?.sort((a, b) => new Date(b._uploadedAt).getTime() - new Date(a._uploadedAt).getTime())
          .slice(0, 6).map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="relative pb-16 hover:border hover:border-neutral-500 bg-neutral-700 border-neutral-600">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <div className="absolute top-1 right-1 left-1">
                    <CardHeader>
                      <img
                        src={product.image}
                        className="rounded-lg max-sm:h-72 max-md:h-96 object-cover h-48 w-full "
                      />
                    </CardHeader>
                    <CardTitle className="flex px-5 justify-between">
                      <h2 className="text-xl text-neutral-50">
                        {product.name_product}
                      </h2>
                      <Badge
                        variant={"destructive"}
                        className="text-lg bg-blue-500 text-neutral-50"
                      >
                        {product.price}$
                      </Badge>
                    </CardTitle>
                    <CardDescription className=" px-5 my-2 text-white">
                      <p>{product.desc}</p>
                    </CardDescription>
                    <CardFooter className="my-4 flex justify-between items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`mr-1 ${
                              index < product.likes
                                ? "text-yellow-500"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <Button
                        variant={"outline"}
                        className="bg-neutral-700 text-white"
                        onClick={() => handleAddToCart(product)}
                      >
                        <FaCartShopping className="mr-1" />
                        Acheter
                      </Button>
                    </CardFooter>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
