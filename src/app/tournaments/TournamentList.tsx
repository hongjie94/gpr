import Image from "next/image";
import bg from "@/img/bg.jpeg";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {TournamentListComponent} from './type'
export const TournamentList:TournamentListComponent = ({tournamentsData}) => {
  return (
    <div className="grid grid-cols-6 m-20 gap-12">
       {tournamentsData.map((tournament) => (
        <Card key={tournament.id}>
          <div className="relative max-w-sm mx-auto rounded overflow-hidden shadow-lg">
            <Image
              className="w-full object-cover"
              width={1000}
              height={500}
              quality={100}
              src={bg}
              placeholder="blur"
              alt="Card image"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gray-900 text-white px-6 py-4">
              <div className="font-bold text-xl mb-2">{tournament.name}</div>
              <p className="text-gray-300 text-base">
                {tournament.leagueId}
                Stages: {tournament.stages.length} <br />
                Start Date:{tournament.startDate} <br />
                End Date: {tournament.endDate}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default TournamentList;
