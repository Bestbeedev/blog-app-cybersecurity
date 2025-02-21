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
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderTop from "@/components/common/customUI/HeaderTop";

import type { Formations } from "@/types/customTypes";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useFetchCourse } from "@/api/Formations/Category";
import useFormationStore from "@/store/course";
export default function SubMenuHandler() {
  useFetchCourse();
  const { courses } = useFormationStore();
  const location = useLocation();
  const groupFormations = useFormationStore((state) => state.groupedCourses);
  const [filteredCourses, setFilteredCourses] = useState<Formations[]>([]);
  const [domain, setDomain] = useState<string>("");

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const domain = pathParts[pathParts.length - 1];
    setDomain(domain);
    const filtered: Formations[] = groupFormations[domain]?.items || [];
    setFilteredCourses(filtered);
    console.log(" filtered", filtered);
    console.log(location.pathname.split("/"));
  }, [location, groupFormations]);

  console.log("courses filtered", filteredCourses);
  console.log("courses ", courses);
  const navigate = useNavigate();

  const handleCheckDetail = () => {
    const pathname = `/products`;
    const search = `?product`;
    const hash = `#all`;
    navigate(pathname + search + hash, {
      replace: true,
    });
  };

  //makes the fist letter be capital
  const capitalLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div>
      <HeaderTop
        subtitle={` Formations ${
          filteredCourses.length > 0 && `- ${capitalLetter(domain)} `
        }`}
        title="Maîtrisez la cybersécurité grâce à nos formations spécialisées"
        desc="Rejoignez nos sessions interactives et développez une expertise reconnue dans la cybersécurité pour bâtir une carrière ou renforcer vos connaissances."
      />
      <div className="w-full relative py-6 bg-neutral-800">
        <div className="flex relative z-40 w-full max-w-6xl items-center mx-auto px-10 justify-between">
          <h1 className="text-3xl my-5 text-white text-start">
            Formations{" "}
            {filteredCourses.length > 0 && `- ${capitalLetter(domain)} `}
          </h1>
          <Badge
            onClick={handleCheckDetail}
            variant={"outline"}
            className="text-white p-2 px-3 h-fit hover:bg-neutral-50 hover:text-neutral-700 rounded-lg"
          >
            Voir tout les produits
          </Badge>
        </div>
        <div className="flex relative pb-9 justify-center">
          {filteredCourses && filteredCourses.length > 0 ? (
            <CarouselSize courses={filteredCourses} />
          ) : (
            <p className="text-white">Aucune formation disponible.</p>
          )}
        </div>
      </div>
    </div>
  );
}

type PropsCourse = {
  courses: Formations[];
};

export function CarouselSize({ courses }: PropsCourse) {
  const navigate = useNavigate();
  const handleAddToCart = (course: Formations) => {
    const pathname = `/formations/${course.id}`;
    const search = `?formations=${course.id}`;
    const hash = `#details`;
    navigate(pathname + search + hash, {
      replace: true,
      state: { article: JSON.stringify(course) },
    });
    console.log(JSON.stringify(course));
  };
  console.log("courses props carousel", courses);

  return (
    <div className="w-full max-w-6xl px-8">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {courses
          ?.sort(
            (a, b) =>
              new Date(b._uploadedAt).getTime() -
              new Date(a._uploadedAt).getTime()
          )
          .map((course: Formations) => (
            <div key={course.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="relative pb-[70px] hover:border hover:shadow-lg hover:-translate-y-4 transition hover:border-neutral-500 bg-neutral-700 border-neutral-600">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                    <div className="absolute top-1 right-1 left-1">
                      <CardHeader className="pb-4">
                        {course.image ? (
                          <img
                            src={course.image}
                            onError={(e) => {
                              e.currentTarget.src = `${course.image}`;
                              e.currentTarget.alt = "Image not available";
                            }}
                            className="rounded-lg max-sm:h-72 max-md:h-96 object-cover h-48 w-full"
                          />
                        ) : (
                          <div className="rounded-lg max-sm:h-72 max-md:h-96 object-cover h-48 w-full bg-gray-300 animate-pulse"></div>
                        )}
                      </CardHeader>
                      <CardTitle className="flex px-4 w-full">
                        <h2 className="text-xl mb-1 w-full flex text-neutral-50">
                          {course.title}
                        </h2>
                      </CardTitle>
                      <CardDescription className="flex px-4 my-2 items-center justify-between text-white">
                        <div className="flex items-start">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={`mr-1 ${
                                index < course.likes
                                  ? "text-yellow-500"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                        <Badge variant="destructive" className="rounded-md">{course.type === "pdf" ? "PDF" : "Video"}</Badge>
                      </CardDescription>
                      <CardFooter className="my-4 flex px-4 justify-between items-center">
                        {course.status === "free" && course.price === 0 ? (
                          <Badge
                            variant={"destructive"}
                            className="text-lg text-neutral-800 hover:text-neutral-50 bg-yellow-500"
                          >
                            Gratuit
                          </Badge>
                        ) : (
                          <Badge
                            variant={"destructive"}
                            className="text-lg bg-blue-500 text-neutral-50"
                          >
                            {course.price}$
                          </Badge>
                        )}
                        <Button
                          variant={"outline"}
                          className="bg-neutral-700 text-white"
                          onClick={() => handleAddToCart(course)}
                        >
                          <FaCartShopping className="mr-1" />
                          Suivre
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
