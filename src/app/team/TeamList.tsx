"use client";

import { TeamListComponent } from "./type";
import playerIcon from "@/img/playerIcon.png";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import TeamGameStatics from "./TeamGameStatics";

const TeamList: TeamListComponent = ({ teamList }) => {
  return (
    <>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-8">
        {teamList.map((team, index) => (
          <Popover key={index}>
            <PopoverTrigger>
              <Card className="bg-zine-100 text-start dark:bg-stone-950 h-auto transition-transform transform hover:cursor-pointer hover:scale-105">
                <CardTitle key={team.team_id} className="p-6">
                  <CardTitle className="dark:text-[#C0A377]">
                    {team.acronym}
                  </CardTitle>
                  <CardDescription className="mb-4 text-muted">
                    {team.name}
                  </CardDescription>
                  <ScrollArea className="h-[255px]">
                    <ul>
                      {team.players.length > 0 ? (
                        team.players.map((player, index: number) => (
                          <li key={index} className="mb-2">
                            <div className="flex items-center">
                              <div className="w-10 h-10 rounded-full flex-shrink-0">
                                <Image
                                  src={playerIcon}
                                  alt="Player Avatar"
                                  width={100}
                                  height={100}
                                  quality={100}
                                  className="w-10 h-10 rounded-full"
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium">
                                  {player.handle}
                                </p>
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
                            src={playerIcon}
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
                  </ScrollArea>
                </CardTitle>
              </Card>
            </PopoverTrigger>
            <PopoverContent side="right" align="center" className="w-auto p-4">
              <TeamGameStatics
                team_id={team.team_id}
                teamName={team.name}
                teamAcronym={team.acronym}
              />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </>
  );
};

export default TeamList;
