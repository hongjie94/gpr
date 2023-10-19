import { useMemo } from "react";
import { RankingComponent } from "../../type";
import Image from "next/image";
import playerIcon from "@/img/playerIcon.svg";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Rankings: RankingComponent = ({ section, TeamsMap, PlayersMap }) => {
  // Calculate Rankings
  const rankingsArr = useMemo(() => {
    const sortedRecord = section.matches
      .map((match) => [match.teams[0], match.teams[1]])
      .flat()
      .sort((a, b) => {
        if (b.record && a.record) {
          // Check if b.record and a.record are not null 0 if wins is null
          const winsA = a.record.wins || 0;
          const winsB = b.record.wins || 0;

          // Sort by losses in ascending order if wins are equal
          if (winsB === winsA) {
            const lossesA = a.record.losses || 0;
            const lossesB = b.record.losses || 0;
            return lossesA - lossesB;
          }
          return winsB - winsA; // Sort by wins in descending order
        }
        return 0;
      });

    const uniqueIds = new Set();
    // Use filter to keep only unique team
    const uniqueArray = sortedRecord.filter((team) => {
      if (uniqueIds.has(team.id)) {
        return false;
      }
      uniqueIds.add(team.id); // Add the ID to the Set
      return true;
    });
    return uniqueArray;
  }, [section]);
  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-2xl font-semibold">Rankings</h1>
      </div>
      <div className="p-4 border border-stone-200 dark:border-stone-800 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {rankingsArr.map(
            (rankingData, index) =>
              rankingData.id != "0" && (
                <div
                  key={rankingData.id}
                  className="relative border border-stone-200 dark:border-stone-800 p-4 m-4 rounded-lg shadow"
                >
                  <p className="text-lg font-semibold dark:text-[#E7CCA3]">
                    Ordinal: {index + 1}
                  </p>
                  <div>
                    Team:
                    <Badge variant="outline" className="mx-2">
                      {TeamsMap[rankingData.id].name}
                    </Badge>
                  </div>
                  <p>Wins: {rankingData.record.wins}</p>
                  <p>Losses: {rankingData.record.losses}</p>
                  <p>Ties: {rankingData.record.ties}</p>

                  <Popover>
                    <PopoverTrigger>
                      <div className="rounded-full h-max hover:animate-bounce absolute top-0 right-0 py-2 px-3 cursor-pointer">
                        <Image
                          src={playerIcon}
                          alt="Player Avatar"
                          width={70}
                          height={70}
                        ></Image>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent
                      side="top"
                      align="start"
                      className="w-auto p-4"
                    >
                      <h2 className="text-xl font-bold mb-2">Players</h2>

                      <div className="my-6 w-full overflow-y-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="m-0 border-t p-0 even:bg-muted">
                              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                Summoner
                              </th>
                              <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                Role
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {rankingData.players.map((player, index) => (
                              <>
                                {PlayersMap[player.id] &&
                                  player.role !== "none" && (
                                    <tr
                                      key={player.id}
                                      className="m-0 border-t p-0 even:bg-muted"
                                    >
                                      <td className="border dark:text-[#D9C9A3] px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                        {PlayersMap[player.id]}
                                      </td>
                                      <td className="border dark:text-[#D3CCB9]  px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                        {player.role}
                                      </td>
                                    </tr>
                                  )}
                              </>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Rankings;
