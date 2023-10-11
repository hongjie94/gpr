"use client";

import { useQuery } from "@apollo/client";
import { GET_TOURNAMENT } from "../../../graphql/queries";
import Loading from "@/app/loading";

const TournamentPage = ({ params: { id } }) => {
  
  const { data, loading } = useQuery(GET_TOURNAMENT, {
    variables: { id },
  });

  if (loading) {
    return <Loading />;
  }

  const tournament = data.tournament;
  const stages = tournament.stages;

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8">
        Tournament: {tournament.name}
      </h1>
      <div className="space-y-4">
        <div className="bg-stone-950 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Tournament Details</h2>
          <div className="mb-4">
            <p className="text-muted">Start Date:</p>
            <p className="text-lg">{tournament.startDate}</p>
          </div>
          <div className="mb-4">
            <p className="text-muted">End Date:</p>
            <p className="text-lg">{tournament.endDate}</p>
          </div>
        </div>
        <div className="space-y-4">
          {stages.map((stage) => (
            <div
              key={stage.name}
              className="bg-stone-950 p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">
                Stage: {stage.name}
              </h2>
              {stage.sections.map((section) => (
                <div key={section.id} className="mb-4">
                  <p className="dark:text-stone-500 text-stone-400">
                    Matches: {section.matches.length}
                  </p>
                  <div className="space-y-2">
                    {section.matches.map((match: any, index: number) => (
                      <div key={index} className="bg-stone-950 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">
                          Match {index + 1}
                        </h3>
                        <p className="dark:text-stone-500 text-stone-400">
                          Date: {match.date}
                        </p>
                        <p className="dark:text-stone-500 text-stone-400">
                          Time: {match.time}
                        </p>
                        <p className="dark:text-stone-500 text-stone-400">
                          Location: {match.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
