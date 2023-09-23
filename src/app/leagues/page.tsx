import LeagueList from "./LeagueList";
import fetchData from "@/lib/fetchData";

export default async function page() {
  const leagues = await fetchData("leagues");

  return (
    <div className="m-12 md:m-2">
    <div>
    <h2 className="p-8 text-2xl font-bold tracking-tight">Leagues</h2>
      <div className="lg:m-20 md:m-16 sm:m-10 grid gap-12 lg:px-8 grid-cols-4">
        <LeagueList leaguesData = {leagues}/>
      </div>
    </div>
  </div>
  )
}
