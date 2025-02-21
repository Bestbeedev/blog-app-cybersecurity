import { Button } from "@/components/ui/button";
import {Link} from "react-router-dom"
export default function Hero() {
  return (
    <div
      className={`w-full relative bg-[url('/assets/images/HeroBg.jpeg')] h-[40rem] bg-cover bg-center`}
    >
      <div className="inset-0  bg-gradient-to-r from-blue-900 to-purple-900 via-black w-full h-[40rem] opacity-50"></div>
      <div className="absolute w-full left-20 top-32">
        <h1 className="font-semibold text-white w-96 text-5xl">
          {" "}
          Maîtrisez la cybersécurité et l'informatique avec des ressources
          dédiées{" "}
        </h1>
        <Button
         className="my-5" variant="secondary">
          <Link to={"/"}>
          Découvrir les formations
          </Link>
        </Button>
      </div>
    </div>
  );
}
