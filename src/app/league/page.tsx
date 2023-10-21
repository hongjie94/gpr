import LeagueList from "./LeagueList";

export default async function page() {
  return (
    <div className="container font-fantasy">
      <header className="py-4 px-1 my-8">
        <h1 className="text-3xl font-bold mb-2 ">Leagues</h1>
        <p className="text-muted">
          Discover Diverse Leagues from Around the Globe
        </p>
      </header>
      <div className="grid gap-12 grid-cols-4 mb-40">
        <LeagueList />
      </div>
    </div>
  );
}
