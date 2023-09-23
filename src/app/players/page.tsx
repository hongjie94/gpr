import fetchData from "@/lib/fetchData";
import PlayerList from "./PlayerList";

export default async function page() {
  
  const players = await fetchData("players");

  return (
    <div>
      <PlayerList playersData={players}/>
    </div>
  )
}
