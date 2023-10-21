"use client";

import React, { useEffect, useState } from "react";
import TeamList from "./TeamList";
import { useQuery } from "@apollo/client";
import { GET_TEAMS } from "../../graphql/queries";
import { TeamsType } from "./type";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Page() {
  const [teamList, setTeamList] = useState<TeamsType[]>([]);

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
    <div className="min-h-screen">
      <div className="container mx-auto py-8">
        <header className="pb-4 px-1 my-8">
          <h1 className="text-3xl font-bold mb-2">Teams</h1>
          <p className="text-muted">
            Get Acquainted with 673 Elite League of Legends Teams
          </p>
        </header>
        <TeamList teamList={teamList} />
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
