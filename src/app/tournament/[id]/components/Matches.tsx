import Image from "next/image";
import blueTeamBg from "@/img/blue_team.jpeg";
import redTeamBg from "@/img/red_team.jpeg";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Games from "./Games";
import { MatchesComponent } from "../../type";

const Matches: MatchesComponent = ({ matches, TeamsMap, PlayersMap }) => {
  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-2xl font-semibold">Matches</h1>
      </div>

      {matches.map((match, index) => (
        <>
          <div
            key={match.id + index}
            className="p-4 md:p-8 sm:border mt-2 border-stone-200 dark:border-stone-800 rounded-lg shadow"
          >
            <div className="flex justify-center items-center mt-4 mb-12">
              <h3 className="text-lg font-semibold">Match {index + 1}</h3>
              {match.state === "completed" &&
                TeamsMap[match.teams[0].id] &&
                TeamsMap[match.teams[1].id] && (
                  <div className="text-lg px-2">
                    <span className="px-2 text-[#2E7787]">
                      {TeamsMap[match.teams[0].id]?.name}
                    </span>
                    vs
                    <span className="px-2 text-[#8C2347]">
                      {TeamsMap[match.teams[1].id]?.name}
                    </span>
                  </div>
                )}
            </div>
            <Games match={match} TeamsMap={TeamsMap} />
            <div className="flex flex-col lg:flex-row justify-center gap-4 items-center">
              {match.state === "completed" &&
              TeamsMap[match.teams[0].id] &&
              TeamsMap[match.teams[1].id] ? (
                match.teams.map((team, index) => (
                  <div
                    key={team.id + index}
                    className="relative justify-center flex flex-grow"
                  >
                    <Image
                      width={300}
                      height={300}
                      priority={true}
                      className="shadow-lg dark:opacity-50 min-w-[25rem] rounded-3xl border border-stone-200 dark:border-stone-800"
                      src={index === 0 ? blueTeamBg : redTeamBg}
                      alt="image-blue"
                    />
                    <div className="absolute top-0 z-10 p-8">
                      <div className="mt-10">
                        <p className="text-lg md:text-xl font-bold text-white dark:text-[#E7CCA3]">
                          {TeamsMap[team.id] && TeamsMap[team.id]?.name}
                        </p>
                        <p className="text-stone-300 text-base md:text-lg">
                          {TeamsMap[team.id] && TeamsMap[team.id].acronym}
                        </p>
                      </div>
                      <div className="flex justify-center w-100 flex-wrap mt-10 text-slate-50 dark:text-slate-300">
                        <div className="mr-7">
                          <p className="font-semibold mb-1 text-white underline underline-offset-4 ">
                            Game Statistics
                          </p>
                          Result:
                          {team.result.outcome && (
                            <Badge
                              className="ml-2"
                              variant={
                                team.result.outcome === "win"
                                  ? "winner"
                                  : "loser"
                              }
                            >
                              {team.result.outcome}
                            </Badge>
                          )}
                          <p>Game wins: {team.result.gameWins}</p>
                          {match.games.length === 1 && (
                            <p> Side: {team.side}</p>
                          )}
                          <p className="font-semibold mb-1 text-white underline underline-offset-4 mt-2 ">
                            Match Record
                          </p>
                          <p>Wins: {team.record.wins}</p>
                          <p>Losses: {team.record.losses}</p>
                          <p className="mb-1">Ties: {team.record.ties}</p>
                        </div>
                        <div className="w-[175px]">
                          <p className="font-semibold mb-1 underline underline-offset-4 text-white">
                            Players
                          </p>
                          <ScrollArea className="h-[8rem] sm:h-[200px]">
                            <ul>
                              {team.players?.map((player, index) => (
                                <li key={player.id + index}>
                                  {PlayersMap[player.id] !== undefined && (
                                    <div>
                                      {PlayersMap[player.id]} - {player.role}
                                    </div>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </ScrollArea>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted text-center">
                  Missing Data For This Match
                </p>
              )}
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Matches;
