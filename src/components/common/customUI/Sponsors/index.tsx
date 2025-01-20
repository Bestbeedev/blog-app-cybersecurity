import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Sponsors } from "@/types/customTypes";
import { fetchSponsors } from "@/api/sponsors/FetchSponsors";
import { useEffect, useState } from "react";
export default function Sponsors() {
  return (
    <div className=" h-full mx-auto w-full py-24 sm:px-6 sm:py-32 lg:px-8  isolate relative ">
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
      <CarouselSize />
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
  );
}

export function CarouselSize() {
  const [data, setData] = useState<Sponsors[] | undefined>(undefined);

  useEffect(() => {
    const suspense = setTimeout(() => {
      fetchSponsors().then((data) => setData(data));
    }, 3000);
    return () => clearTimeout(suspense);
  }, []);
  return (
    <Card className="flex  z-50 items-center mx-auto max-sm:max-w-md  max-md:flex-col space-x-8 justify-between py-12 w-full h-full">
      <div className="flex flex-col px-4 w-full h-full">
        <CardHeader>
          <CardTitle className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Trusted by the most innovative teams
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue.
          </CardDescription>
          <CardContent className="flex items-center ">
            <Button>Create account</Button>
            <p>Lire plus</p>
          </CardContent>
        </CardHeader>
      </div>
      <div className=" items-center grid grid-cols-2  w-full h-full">
        {data?.map((sponsor) => (
          <div key={sponsor.id} className="items-center w-full h-full">
            <img
              src={sponsor.image}
              className="w-40 h-20"
              alt={sponsor.organisme}
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
