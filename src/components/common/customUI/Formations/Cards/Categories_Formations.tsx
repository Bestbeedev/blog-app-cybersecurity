import { useFetchCourse } from "@/api/Formations/Category";
import useFormationStore from "@/store/course";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Formations } from "@/types/customTypes";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton component

export default function Formations() {
  return (
    <div className="w-full h-full relative bg-neutral-800 py-6  ">
      <h1 className="text-3xl relative z-40 my-5 text-white px-[100px] text-start">
        Categories de Formations
      </h1>
      <div className="flex  justify-center pb-9 ">
        <CarouselSize />
      </div>
    </div>
  );
}

type groupFormations = {
  [domain: string]: {
    count: number;
    image: string;
    items: Formations[];
  };
};

export function CarouselSize() {
  useFetchCourse();
  const { courses } = useFormationStore();
  const navigate = useNavigate();
  const handleFormations = (course: Formations[]) => {
    const pathname = `/formations/${course[0].domain}`;
    const search = `?formations=${course[0].domain}`;
    const hash = `#all`;
    navigate(pathname + search + hash, {
      replace: true,
      state: { course: JSON.stringify(course) },
    });
  };

  const capitalizeWrd = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const groupFormations = courses?.reduce((accumulateur, formation) => {
    const { domain } = formation;
    if (!accumulateur[domain]) {
      accumulateur[domain] = { count: 0, image: formation.image, items: [] };
    }
    accumulateur[domain].count += 1;
    accumulateur[domain].items.push(formation);
    return accumulateur;
  }, {} as groupFormations);

  const imgGroupFormations = [
    {
      id: "1",
      domain: "webdev",
      image: "/assets/images/formations/webdev_2.jpeg",
    },
    {
      id: "2",
      domain: "hacking",
      image: "/assets/images/formations/hacking.jpeg",
    },
    {
      id: "3",
      domain: "cybersecurity",
      image: "/assets/images/formations/cybersecurity.jpeg",
    },
    {
      id: "4",
      domain: "data",
      image: "/assets/images/formations/data.png",
    },
  ];

  if (!courses || courses.length === 0) {
    return (
      <div className="w-full max-w-6xl px-8">
        <div className="flex flex-wrap">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="md:basis-1/2 lg:basis-1/3 p-1 max-sm:w-full "
            >
              <Card className="relative  bg-neutral-700 border-neutral-600">
                <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                  <Skeleton className="h-64 w-full bg-neutral-500 rounded-lg" />
                  <div className="flex my-3 mx-3 space-x-2">
                    <Skeleton className="h-6 w-24 rounded-md bg-neutral-500" />
                    <Skeleton className="h-6 w-24 rounded-md bg-neutral-500" />
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
      className="w-full  max-w-6xl px-8"
    >
      <CarouselContent>
        {groupFormations &&
          Object.entries(groupFormations).map(([domain, { count }]) => (
            <CarouselItem key={domain} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="relative z-30 bg-neutral-700 cursor-pointer hover:border-neutral-500 hover:border border-neutral-600">
                  <span className="absolute z-50 top-3 border border-neutral-500 text-white left-4 bg-neutral-600 p-2 px-4 rounded-full ">
                    {count}
                  </span>
                  <CardContent className="flex flex-col aspect-square border-none items-start relative justify-center p-6">
                    <div className="">
                      {(() => {
                        const img = imgGroupFormations.find(
                          (img) => img.domain === domain
                        )?.image;
                        if (img) {
                          return (
                            <img
                              src={img}
                              className="rounded-lg max-sm:h-72 max-md:h-96 object-cover h-64 w-full"
                              onClick={() => {
                                handleFormations(groupFormations[domain].items);
                              }}
                            />
                          );
                        }

                        return (
                          <img
                            src={groupFormations[domain].image}
                            className="h-40 w-40"
                          />
                        );
                      })()}
                      <div className="flex my-3  mx-2 space-x-2 ">
                        <Button
                          onClick={() => {
                            handleFormations(groupFormations[domain].items);
                          }}
                          className="my-2"
                          variant={"destructive"}
                        >{capitalizeWrd(domain)}
                          <ArrowRight className="" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="z-30" />
      <CarouselNext className="z-30" />
    </Carousel>
  );
}
