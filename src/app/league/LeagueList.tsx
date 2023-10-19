"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {ImageSwitcher} from "@/components/ui/image-switcher";
import LeagueListLoader from "./LeagueListLoader";

import { GET_LEAGUES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import {leaguesListSchema} from  "./type"
import { z } from "zod";

const LeagueList = () => {

  // Fetch league data and Create a memoized variable for leagues
  const { data, loading } = useQuery(GET_LEAGUES);
  const leagues = useMemo(() => data?.leagues, [data]);

  // Loading spinner for loading data
  if (loading && !leagues) return <LeagueListLoader />;

  // Parse Zod 
  const zLeagues = z.array(leaguesListSchema).parse(leagues)

  return (
    <>
      {zLeagues && zLeagues.map((data) => (
        <Link
          key={data.league_id}
          className="col-span-4 xl:col-span-1 md:col-span-2"
          href={`/league/${data.league_id}`}
        >
          <Card className="flex items-center p-2 transition-transform transform hover:cursor-pointer hover:scale-105 bg-zinc-100  dark:bg-stone-950">
            <ImageSwitcher width={100} height={100} style="p-4" data={data} />
            <div>
              <CardHeader className="pb-2">
                <CardTitle className="line-clamp-1">{data.name}</CardTitle>
                <CardDescription className="line-clamp-1">
                  {data.region}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <p className="line-clamp-1">
                Priority {data.priority}
                </p>
              </CardFooter>
            </div>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default LeagueList;
