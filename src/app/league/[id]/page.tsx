"use client";

import { GET_LEAGUE } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import Tournaments from "./Tournaments";
import { Params } from "../type";

import Loader from "@/components/ui/loader";
import { ImageSwitcher } from "@/components/ui/image-switcher";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const Page: React.FC<Params> = ({ params: { id } }) => {
  const { data, loading } = useQuery(GET_LEAGUE, {
    variables: { id },
  });
  if (loading)
    return (
      <div className="container my-24 min-h-screen">
        <div className="flex items-center mb-24">
          <Skeleton className="w-[350px] flex p-4">
            <Skeleton className="h-[120px] w-[100px] flex justify-center items-center mr-6">
              <Loader />
            </Skeleton>
            <div>
              <Skeleton className="mb-2 h-[40px] w-[120px]" />
              <Skeleton className=" h-[25px] w-[200px] my-4" />
              <Skeleton className=" h-[25px] w-[200px]" />
            </div>
          </Skeleton>
        </div>
        <Separator />
        <h1 className="text-3xl font-semibold text-center my-8">Tournaments</h1>
        <div className="p-12 w-100 flex items-center justify-center">
          <Loader /> <h1 className="mx-2">Loading ...</h1>
        </div>
      </div>
    );

  const league = data.league;

  return (
    <>
      <div className="container my-24">
        <Card className="flex items-center mb-12 p-6 w-fit pr-14">
          <ImageSwitcher width={120} height={120} style="p-4" data={league} />
          <div>
            <CardTitle className="text-4xl font-semibold mb-1">
              {league.name}
            </CardTitle>
            <CardDescription className="text-md">
              {league.region}
            </CardDescription>
          </div>
        </Card>
        <Separator />
        <Tournaments tournaments={league.tournamentsList} />
      </div>
    </>
  );
};

export default Page;
