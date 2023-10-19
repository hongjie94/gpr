import { TournamentDetailsComponent } from "../../type";
import tournamentBannerImage from "@/img/bannerBg.png";

import Image from "next/image";

const TournamentDetails: TournamentDetailsComponent = ({ tournament }) => {
  let numTeams = 0;
  let numMatches = 0;
  let numPlayers = 0;
  let numGames = 0;

  tournament.stages.forEach((stage) => {
    stage.sections.forEach((section) => {
      section.matches.forEach((match) => {
        if (match.state === "completed") {
          numMatches++;
          numGames += match.games.length;
          numPlayers += match.teams.reduce(
            (acc, team) => acc + team.players.length,
            0
          );
          numTeams += new Set(match.teams.map((team) => team.id)).size;
        }
      });
    });
  });

  const tournamentDetails = [
    { label: "Start Date", value: tournament.startDate },
    { label: "End Date", value: tournament.endDate },
    { label: "Number of Stages", value: tournament.stages.length },
    { label: "Completed Matches", value: numMatches },
    { label: "Total Games Played", value: numGames }, 
    { label: "Participating Teams", value: numTeams },
    { label: "Total Players", value: numPlayers },
  ];

  return (
    <>
      <div className="relative overflow-hidden h-[23rem] border border-stone-200 bg-zinc-100 dark:bg-stone-950 dark:border-stone-800 p-6 rounded-lg shadow-lg">
        <Image
          width={500}
          height={500}
          className="absolute top-[-85px] right-0 p-4 hidden md:inline-block"
          priority={true}
          src={tournamentBannerImage}
          alt="tournament_Banner_Image"
        />
        <h2 className="text-2xl font-semibold mb-6">
          Tournament Details
        </h2>
        <div className="flex justify-between">
          <div className="space-y-4">
            {tournamentDetails.map((item, index) => (
              <div className="flex justify-start items-center" key={index}>
                <p className="text-muted mr-3">{item.label}:</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TournamentDetails;
