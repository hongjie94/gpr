"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOURNAMENTS } from "../../graphql/queries"; // Import the Tournament type
import LeagueImage from "./LeagueImage";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Tournament } from "./type";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const TournamentList = () => {
  const [tournamentList, setTournamentList] = useState<Tournament[]>([]);

  // Number tournament card per page (pagination)
  const [take] = useState(12);
  const [skip, setSkip] = useState(0);

  const { data, loading } = useQuery(GET_TOURNAMENTS, {
    variables: { take, skip },
  });
  useEffect(() => {
    if (!loading && data && data.tournaments) {
      setTournamentList((prevTournamentList) => [
        ...prevTournamentList,
        ...data.tournaments,
      ]);
    }
  }, [loading, data]);

  const loadMoreTournaments = () => {
    if (!loading) {
      setSkip((prevSkip) => prevSkip + take);
    }
  };

  return (
    <>
      {tournamentList.map((tournament) => (
        <Link
          key={tournament.tournament_id}
          href={`/tournament/${tournament.tournament_id}`}
          className="transition-transform transform hover:cursor-pointer hover:scale-105"
        >
          <Card
            key={tournament.tournament_id}
            className="min-h-[222px] mt-2 bg-gradient-to-b dark:from-stone-950 dark:to-zinc-950 bg-zinc-100 p-6 shadow-md"
          >
            <LeagueImage id={tournament.leagueId} />
            <CardTitle className="text-xl font-semibold my-2">
              {tournament.name}
            </CardTitle>
            <CardDescription className="text-sm mb-2">
              Start Date: {tournament.startDate}
            </CardDescription>
            <CardDescription className="text-sm mb-2">
              End Date: {tournament.endDate}
            </CardDescription>
          </Card>
        </Link>
      ))}
      <div className="w-100 flex justify-center mb-24 col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 mt-2">
        <Button
          onClick={loadMoreTournaments}
          variant={loading ? null : "outline"}
          disabled={loading}
        >
          {loading ? (
            <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            "Load More"
          )}
        </Button>
      </div>
    </>
  );
};

export default TournamentList;
