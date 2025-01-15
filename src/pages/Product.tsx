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
import HeaderTop from "@/components/common/customUI/HeaderTop";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import { Produits } from "@/types/customTypes";
import { Badge } from "@/components/ui/badge";
import useProductStore from "@/store/product";
import { useFetchProduct } from "@/api/Products/FetchProduct";
export default function Products() {
  const navigate = useNavigate();
  const handleCheckDetail = () => {
    const pathname = `/products`;
    const search = `?product`;
    const hash = `#all`;
    navigate(pathname + search + hash, {
      replace: true,
    });
  };
  return (
    <>
      <HeaderTop />
      <div className="w-full relative py-6 bg-neutral-800">
        <div className="flex relative z-40 w-full max-w-6xl items-center mx-auto px-10 justify-between">
          <h1 className="text-3xl my-5 text-white  text-start"> Produits</h1>
          <Badge
            onClick={handleCheckDetail}
            variant={"outline"}
            className="  text-white p-2 px-3 h-fit hover:bg-neutral-50 hover:text-neutral-700   rounded-lg"
          >
            Voir tout les produits
          </Badge>
        </div>
        <div className="flex relative  pb-9  justify-center">
          <CarouselSize />
        </div>
      </div>
    </>
  );
}

export function CarouselSize() {
  useFetchProduct();
  const { products } = useProductStore();
  const navigate = useNavigate();
  const handleAddToCart = (product: Produits) => {
    const pathname = `/products/${product.id}`;
    const search = `?product=${product.id}`;
    const hash = `#details`;
    navigate(pathname + search + hash, {
      replace: true,
      state: { article: JSON.stringify(product) },
    });
    console.log(JSON.stringify(product));
  };

  return (
    <div className="w-full max-w-6xl px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products
          ?.sort(
            (a, b) =>
              new Date(b._uploadedAt).getTime() -
              new Date(a._uploadedAt).getTime()
          )
          .map((product) => (
            <div key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="relative pb-16 hover:border hover:shadow-lg hover:-translate-y-4 transition  hover:border-neutral-500 bg-neutral-700 border-neutral-600">
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
            </div>
          ))}
      </div>
    </div>
  );
}
