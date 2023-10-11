import TournamentList from "./TournamentList";

const Page = () => {
  return (
    <div>
      <div className="container min-h-screen">
        <header className="py-4 px-1 my-8">
          <h1 className="text-3xl font-bold">Tournaments</h1>
          <p className="text-muted">Explore an extensive list of 248 tournaments</p>
        </header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          <TournamentList />
        </div>
      </div>
    </div>
  );
};

export default Page;
