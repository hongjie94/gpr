import LeagueList from "./LeagueList";

export default async function page() {
  return (
    <div className="container">
      <header className="py-4 px-1 my-8">
        <h1 className="text-3xl font-bold">Leagues</h1>
        <p>List of League of Legends leagues</p>
      </header>
      <div className="grid gap-12 grid-cols-4 mb-40">
        <LeagueList />
      </div>
    </div>
  );
}
