import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GamesComponent } from "../../type";

const Games: GamesComponent = ({match, TeamsMap}) => {
  return (
    <>
      {match.games.length > 1 &&  match.state === "completed" &&
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mb-8 mt-12">
        {match.games.map((game) => (
          <div key={game.id}>
            <Card>
              <CardHeader>
                <CardTitle className="dark:text-[#E7CCA3]">
                  Game: {game.number}
                </CardTitle>
                <CardDescription>State: {game.state} </CardDescription>
              </CardHeader>
              <CardContent>
                <table className="w-full">
                  <tbody>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border dark:text-[#D9C9A3] px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Blue Team:
                      </td>
                      <td className="border dark:text-[#D3CCB9]  px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        {TeamsMap[game.teams[0].id].name}
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border dark:text-[#D9C9A3] px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        Red Team:
                      </td>
                      <td className="border dark:text-[#D3CCB9]  px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                        {TeamsMap[game.teams[1].id].name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
              <CardFooter>
                {game.state ==="completed" && (
                  <p className="text-base font-bold">
                    Winner: &nbsp;
                     {game.teams[0].result.outcome === "win"
                      ? TeamsMap[game.teams[0].id].acronym
                      : TeamsMap[game.teams[1].id].acronym}
                  </p>
                )}
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>}
    </>
  );
};

export default Games;
