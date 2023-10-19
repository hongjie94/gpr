import { useState } from "react";
import {
  SectionsComponent,
  MatchesType,
  TournamentTeamsType,
  TournamentPlayersType,
  TeamsMapType,
  PlayersMapType
} from "../../type";
import { useQuery } from "@apollo/client";
import { GET_TOURNAMENT_TEAMS } from "@/graphql/queries";
import LoaderBar from "@/components/ui/loaderBar";
import { Button } from "@/components/ui/button";
import Rankings from "./Rankings";
import Matches from "./Matches";

const Sections: SectionsComponent = ({ section }) => {

  const itemsPerPage = 5;

  const [currentIndex, setCurrentIndex] = useState(1);
  const [loadedMatches, setLoadedMatches] = useState<MatchesType[]>(
    section.matches.slice(0, itemsPerPage)
  );

  const loadMoreItem = () => {
    setCurrentIndex(currentIndex + 1);
    const start = 0;
    const end = (currentIndex + 1) * itemsPerPage;
    const newMatches = section.matches.slice(start, end);
    setLoadedMatches(newMatches);
  };

  const { data, loading, error } = useQuery(GET_TOURNAMENT_TEAMS);
  if (loading) return <LoaderBar />;
  if (error) {
    console.log(error);
  }

  // const TeamsMap: TeamsMapType= new Map();
  // const PlayersMap: PlayersMapType = new Map();
  
  const TeamsMap: TeamsMapType = {};
  const PlayersMap: PlayersMapType = {};

  const TournamentTeams:TournamentTeamsType[] = data.teams;
  const TournamentPlayers:TournamentPlayersType[] = data.players;

 TournamentTeams.forEach((team) => {
  const { team_id, name, acronym } = team;
  TeamsMap[team_id] = { name, acronym };
});

TournamentPlayers.forEach((player) => {
  const { player_id, handle } = player;
  PlayersMap[player_id] = handle;
});
console.log(TournamentTeams)
  return (
    <>
      <Rankings section={section} TeamsMap={TeamsMap} PlayersMap={PlayersMap} />
      <Matches
        matches={loadedMatches}
        TeamsMap={TeamsMap}
        PlayersMap={PlayersMap}
      />

      {section.matches.length > loadedMatches.length && (
        <div className="w-100 flex justify-center">
          <Button onClick={loadMoreItem} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default Sections;
