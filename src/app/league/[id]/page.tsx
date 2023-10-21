"use client";

import { GET_LEAGUE } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Tournaments from "./Tournaments";
import { Params, leagueSchema } from "../type";

import { ImageSwitcher } from "@/components/ui/image-switcher";
import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import SkeletonLoader from "./SkeletonLoader";

const Page: React.FC<Params> = ({ params: { id } }) => {

  
  // Fetch league data from Apollo Client's useQuery
  const { data, loading, error } = useQuery(GET_LEAGUE, {
    variables: { id },
  });
  if(error){console.log(error);}
  // Loading skeleton for loading data
  if (loading) return <SkeletonLoader />;
  
  // Parse Zod
  const league = data.league;
  const zLeague = leagueSchema.parse(league);

  return (
    <>
      <div className="container my-24">
        <Card className="flex items-center mb-12 p-6 w-100 sm:w-fit pr-14">
          <ImageSwitcher width={120} height={120} style="p-4" data={zLeague} />
          <div>
            <CardTitle className="text-4xl font-semibold mb-1">
              {zLeague.name}
            </CardTitle>
            <CardDescription className="text-md">
              {zLeague.region}
            </CardDescription>
          </div>
        </Card>
        <Separator />
        <Tournaments tournaments={zLeague.tournamentsList} />
      </div>
    </>
  );
};

export default Page;
