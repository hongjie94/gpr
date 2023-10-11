"use client"

import Loading from "../loading";
import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../../graphql/queries";
import { z } from "zod"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { playerSchema } from "./type";

export default function Page() {

  const { data, loading } = useQuery(GET_PLAYERS)

  if (loading) {return  (<Loading/>)} 
  
  const players = data.players
  const zPlayers = z.array(playerSchema).parse(players)

  return (
  <>
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex container mb-20">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold">Player Directory</h2>
            <p className="text-muted-foreground">
              Get to know the players on your favorite teams!
            </p>
          </div>
        </div>
        <DataTable data={zPlayers} columns={columns} />
      </div>
  </>
  );
}
