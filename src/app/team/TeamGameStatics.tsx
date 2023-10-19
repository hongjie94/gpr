import { useQuery } from "@apollo/client";
import { GET_GAMES_TEAMS } from "@/graphql/queries";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ReloadIcon } from "@radix-ui/react-icons";
import { TeamGameStaticsComponent, PlayedGamesType } from "./type";

const TeamGameStatics: TeamGameStaticsComponent = ({ team_id, teamName, teamAcronym }) => {
  const { data, loading, error } = useQuery(GET_GAMES_TEAMS, {
    variables: { team_id },
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <ReloadIcon className="h-4 w-4 animate-spin" />;
  }

  if (error) {
    console.log(error);
  }

  const playedGames: PlayedGamesType[] = data.games;

  const winnings = playedGames
    .filter((game) => game.teams.some((team) => team.result === "win" && team.id === team_id))
    .map((game) => game.teams.find((team) => team.result === "win")?.side);

  const numberOfBlueWins = winnings.filter((team) => team === "blue").length;
  const numberOfRedWins = winnings.filter((team) => team === "red").length;

  const blueSideGames = playedGames.filter((game) => game.teams.some((team) => team.side === "blue" && team.id === team_id));
  const redSideGames = playedGames.length - blueSideGames.length;
  
  const redWinRate = Math.round((numberOfRedWins / playedGames.length) * 100);
  const blueWinRate = Math.round((numberOfBlueWins / playedGames.length) * 100);

  const TeamsStatics = [
    {
      name: "Total Games",
      value: `${playedGames.length}`,
    },
    {
      name: "Wins",
      value: `${winnings.length}`,
    },
    {
      name: "Losses",
      value: `${playedGames.length - winnings.length}`,
    },
    {
      name: "Win Rate",
      value: `${Math.round((winnings.length / playedGames.length) * 100)}%`,
    },
    {
      name: "Blue Side",
      value: `${blueSideGames.length} games, ${numberOfBlueWins} wins, ${blueWinRate}% win rate`,
    },
    {
      name: "Red Side",
      value: `${redSideGames} games,  ${numberOfRedWins} wins, ${redWinRate}% win rate`,
    },
  ];

  const BarChartData = [
    { side: "Blue", winRate: blueWinRate },
    { side: "Red", winRate: redWinRate },
  ];

  return playedGames.length > 0 ? (
    <div className="p-2">
      <div className="mb-8">
        <h1 className="text-center">{teamAcronym} Game Statistics</h1>
        <p className="text-center text-muted">{teamName}</p>
      </div>

      {blueWinRate > 0 && (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={BarChartData}>
            <XAxis dataKey="side" />
            <YAxis />
            <Bar dataKey="winRate" fill="#C0A377" barSize={50} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}

      {TeamsStatics.map((TeamStatic, index) => (
        <div key={index} className="text-sm mt-1">
          <span className="dark:text-[#C0A377] font-semibold px-2">
            {TeamStatic.name}:
          </span>{" "}
          {TeamStatic.value}
        </div>
      ))}
    </div>
  ) : (
    <span>No data available</span>
  );
};

export default TeamGameStatics;
