import TournamentList from "./TournamentList";
import fetchData from "@/lib/fetchData";

export default async function page() {
  const tournaments = await fetchData("tournaments/per_page18/page1");

  return (
    <div>
     <TournamentList tournamentsData={tournaments}/>
    </div>
  );
}
