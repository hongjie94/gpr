"use client";

import Loading from "../loading";
import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../../graphql/queries";
import { z } from "zod";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { playerSchema } from "./type";

export default function Page() {
  // Fetch data
  const { data, loading, error } = useQuery(GET_PLAYERS);

  // loader for loading and log error if error
  if (loading ) return <Loading />;
  if (error ) return console.log(error);

  // Parse Zod
  const players = data.players;
  const zPlayers = z.array(playerSchema).parse(players);

  return (
    <>
      <div className="mb-20 min-h-screen flex-1 flex-col space-y-8 p-8 md:flex container">
        <div className="flex items-center justify-between space-y-2">
          <header className=" px-1 my-8 font-fantasy">
            <h1 className="text-3xl font-bold mb-2">Player Directory</h1>
            <p className="text-muted">
              Get to know the players on your favorite teams!
            </p>
          </header>
        </div>
        <DataTable data={zPlayers} columns={columns} />
      </div>
    </>
  );
}
