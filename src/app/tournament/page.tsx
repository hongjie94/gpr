import TournamentList from "./TournamentList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div>
      <div className="container min-h-screen">
        <header className="py-4 px-1 my-8">
          <h1 className="text-3xl font-bold mb-2">Tournaments</h1>
          <p className="text-muted">
            Explore 248 tournaments from 2020 to 2023.
          </p>
        </header>
        <Tabs defaultValue="tournaments_2023" className="mb-40">
          <TabsList className="mb-4">
            <TabsTrigger value="tournaments_2023">2023</TabsTrigger>
            <TabsTrigger value="tournaments_2022">2022</TabsTrigger>
            <TabsTrigger value="tournaments_2021">2021</TabsTrigger>
            <TabsTrigger value="tournaments_2020">2020</TabsTrigger>
          </TabsList>
          <TabsContent value="tournaments_2023">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <TournamentList year={2023} count={75}/>
            </div>
          </TabsContent>
          <TabsContent value="tournaments_2022">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <TournamentList year={2022} count={82}/>
            </div>
          </TabsContent>
          <TabsContent value="tournaments_2021">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <TournamentList year={2021} count={64}/>
            </div>
          </TabsContent>
          <TabsContent value="tournaments_2020">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <TournamentList year={2020}count={27} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
