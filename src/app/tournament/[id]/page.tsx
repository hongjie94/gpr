"use client";

import { useQuery } from "@apollo/client";
import { GET_TOURNAMENT } from "@/graphql/queries";
import Loading from "@/app/loading";
import Stages from "./components/Stages";
import { TournamentType, Params } from "../type";
import TournamentDetails from "./components/TournamentDetails";
import Header from "./components/Header";

const TournamentPage: React.FC<Params> = ({ params: { id } }) => {
  const tournament_id = id;
  const { data, loading, error } = useQuery(GET_TOURNAMENT, {
    variables: { tournament_id },
    fetchPolicy: "no-cache",
  });

  if (error) {console.log(error)}
  if (loading) { return <Loading />}
  const tournament: TournamentType = data.tournament;

  return (
    <div className="container mx-auto py-8 mb-20">
      <Header tournament={tournament} />
      <div className="space-y-4">
        <TournamentDetails tournament={tournament} />
        <Stages stages={tournament.stages} />
      </div>
    </div>
  );
};

export default TournamentPage;
