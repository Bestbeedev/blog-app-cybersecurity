import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { SiFacebook, SiLinkedin } from "react-icons/si";
// import { Button } from "@/components/ui/button";
export default function Team() {
  return (
    <div className="w-full h-full mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8  bg-gradient-to-r to-neutral-900 via-neutral-700 from-neutral-900 ">
      <CarouselSize />
    </div>
  );
}

export function CarouselSize() {
    const teams=[
        {
            id:'1',
            name:"Johnatan",
            role:"Cybersecurity",
            _lkd:"https://lkn...",
            _fcb:"https://fcb..."
        },
        {
          id:'2',
            name:"Josue",
            role:"Developpeur web",
            _lkd:"https://lkn...",
            _fcb:"https://fcb..."  
        }
    ]
  return (
    <Card className="flex items-center  mx-auto max-sm:max-w-md  max-md:flex-col space-x-8 justify-between py-12 w-full h-full">
      <div className="flex flex-col px-4 w-full h-full">
        <CardHeader>
          <CardTitle className="text-balance text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Our team
          </CardTitle>
          <CardDescription className="text-center w-1/2 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue.
          </CardDescription>
          <CardContent className="flex max-sm:md gap-5 items-center ">
            {teams?.map((member) => (
              <Card
                key={member.id}
                className="flex flex-col mt-5 items-center w-1/2 h-full p-4"
              >
                <CardContent className="flex flex-col items-center w-full h-full">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/team-page-04-team-member-01.jpg"
                    className="w-40 h-40 border-neutral-600 rounded-full"
                    alt="team"
                  />
                  <CardTitle className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {member.role}
                  </CardDescription>
                  <CardFooter className="flex my-3 gap-4">
                    <Link
                      className="p-2 bg-neutral-500 rounded-lg"
                      to={member._fcb}
                    >
                      <SiFacebook />
                    </Link>
                    <Link
                      className="p-2 bg-neutral-500 rounded-lg"
                      to={member._lkd}
                    >
                      <SiLinkedin />
                    </Link>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </CardHeader>
      </div>
    </Card>
  );
}
