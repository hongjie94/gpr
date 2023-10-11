"use client";

import React, { useEffect, useState } from "react";
import TeamList from "./TeamList";
import { useQuery } from "@apollo/client";
import { GET_TEAMS } from "../../graphql/queries";
import playerIcon from "@/img/playerPlaceHolder.jpeg";
import Image from "next/image";
import { Teams } from "./type";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import playerIcon1 from "@/img/icon1.png";
import playerIcon2 from "@/img/icon2.png";
import playerIcon3 from "@/img/icon22.png";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [teamList, setTeamList] = useState<Teams[]>([]);

  const [take] = useState(15);
  const [skip, setSkip] = useState(0);

  const { data, loading } = useQuery(GET_TEAMS, {
    variables: { take, skip },
  });

  useEffect(() => {
    if (!loading && data && data.teams) {
      setTeamList((prevTeamList) => [...prevTeamList, ...data.teams]);
    }
  }, [loading, data]);

  const loadMoreTeams = () => {
    if (!loading) {
      setSkip((prevSkip) => prevSkip + take);
    }
  };

  return (
    <div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-8">Team Information</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
          {teamList.map((team) => (
            <Card
              className="p-6 bg-zine-100 dark:bg-stone-950 h-auto"
              key={team.id}
            >
              <CardTitle className=""> {team.name} </CardTitle>
              <CardDescription className="mb-4 text-muted">
                {" "}
                {team.acronym}
              </CardDescription>

              <ul className="h-[255px] overflow-hidden hover:overflow-auto">
                {team.players.length > 0 ? (
                  team.players.map((player) => (
                    <li key={player.id} className="mb-2">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full flex-shrink-0">
                          <Image
                            src={playerIcon1}
                            alt="Player Avatar"
                            width={100}
                            height={100}
                            quality={100}
                            className="w-10 h-10 rounded-full"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{player.handle}</p>
                          <p className="text-xs text-muted">
                            {player.first_name} {player.last_name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <div className="flex items-center justify-center h-max p-2 flex-col">
                    <Image
                      src={playerIcon3}
                      alt="Player Avatar"
                      width={100}
                      height={100}
                    ></Image>
                    <p className="text-sm  text-center">
                      No players are currently listed on this LoL team.
                    </p>
                  </div>
                )}
              </ul>
            </Card>
          ))}
        </div>

        <div className="w-100 flex justify-center mb-24 col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 mt-2">
          <Button
            onClick={loadMoreTeams}
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
      </div>
    </div>
  );
}
