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
    <div className=" h-full mx-auto w-full py-24 sm:px-6 sm:py-32 lg:px-8  bg-gradient-to-r from-blue-900 via-purple-900 to-black ">
      <CarouselSize />
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
    <Card className="flex items-center mx-auto max-sm:max-w-md  max-md:flex-col space-x-8 justify-between py-12 w-full h-full">
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
