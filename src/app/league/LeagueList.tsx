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
import { GET_LEAGUES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import PageLoader from "./PageLoader";

const LeagueList = () => {
  const { data, loading } = useQuery(GET_LEAGUES);
  const leagues = useMemo(() => data?.leagues, [data]);

  if (loading && !leagues) return <PageLoader />;
   
  return (
    <>
      {leagues && leagues.map((data: any) => (
        <Link
          key={data.id}
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
