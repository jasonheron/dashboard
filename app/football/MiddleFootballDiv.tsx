import Image from "next/image";
import SingleMatch, { TSingleMatch } from "./SingleMatch";
import background from "../../public/background.png";
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MiddleCarousel } from "./MiddleCarousel";



async function getLeagueFixers() {
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&next=10",
    {
      headers: {
        "X-RapidAPI-Key": "19978d8ad8msh966959f511c0cedp1fbbacjsnd4ed69eb1e78",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    }
  );

  if (!res.ok) {
    // throw new Error('Failed to fetch data')
    console.log("res", res);
  }

  return res.json();
}

export default async function MiddleFootballDiv() {
  const { response } = await getLeagueFixers();

  const dateObject = new Date(response[0]?.fixture?.date);

  // Extract hour and minute
  const hour = dateObject.getHours();
  const minute = dateObject.getMinutes();

  // Format the result as HH:mm
  const formattedTime = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);

  return (
    <div className="w-full lg:w-[56%] my-6 2xl:my-8">
      {/* top div contain banner and match  */}
      <MiddleCarousel response={response} formattedTime={formattedTime} />
      {/* this is filter div or latest show div  */}
      <div className="flex items-center justify-between gap-6 py-4 2xl:py-6">
        <h4>Upcoming Fixtures</h4>
        <div>
          <span></span>
        </div>
      </div>

      {/* this is matches div or favorite show div  */}
      <div className="flex flex-col gap-2 2xl:gap-4">
        {response?.slice(0, 10).map((match: any) => (
          <SingleMatch key={match.fixture.id} match={match} />
        ))}
      </div>
    </div>
  );
}
