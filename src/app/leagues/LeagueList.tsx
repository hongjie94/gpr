"use client"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import { LeagueListComponent } from "./type"
import {useTheme} from "next-themes"

const LeagueList: LeagueListComponent =  ({leaguesData}) => {
  const theme  = useTheme();
  return (
    <>
      {leaguesData.map((data) => (
        <Card
          key={data.id}
          className="col-span-4 2xl:col-span-1 md:col-span-2 flex items-center p-2 transition-transform transform hover:cursor-pointer hover:scale-105 bg-zinc-100  dark:bg-stone-950"
        >
          <Image
            width={100}
            height={100}
            className="p-4"
            priority={true}
            src={ theme.resolvedTheme === "dark"
                ? data.lightImage
                : data.darkImage
            }
            
            alt={`image-${data.name}`}
          />
          <div>
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-1">{data.name}</CardTitle>
              <CardDescription className="line-clamp-1">
                {data.region}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <p className="line-clamp-1">
                Tournaments {data.tournaments.length}
              </p>
            </CardFooter>
          </div>
        </Card>
      ))}
    </>
  );
}

export default LeagueList;
