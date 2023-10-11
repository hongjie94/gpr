"use client";

import {TournamentsComponent} from "../type"
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";


const Tournaments:TournamentsComponent  = ({tournaments}) => {
  function formatText(originalText: string): string {
    return originalText
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  if (tournaments.length === 0) {
    return (
      <div className="p-6 text-center text-stone-500 dark:text-stone-400">
        <h1 className="text-2xl font-semibold mb-4">
          No Tournaments Available
        </h1>
        <p className="text-lg">Check back later for upcoming tournaments.</p>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-center my-8">Tournaments</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tournaments.map((tournament) => (
          <Link
            key={tournament.tournament_id}
            href={`/tournament/${tournament.tournament_id}`}
            className="transition-transform transform hover:cursor-pointer hover:scale-105"
          >
            <Card className="bg-gradient-to-b dark:from-stone-950 dark:to-zinc-900 bg-zinc-100  py-12 mt-2 p-6">
            <CardTitle className="text-xl font-semibold mb-2 line-clamp-1">
              {tournament.name.includes("_")
                ? formatText(tournament.name)
                : tournament.name}
            </CardTitle>
            <CardDescription className="text-sm mb-2">Start Date: {tournament.startDate}</CardDescription>
            <CardDescription className="text-sm">End Date: {tournament.endDate}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Tournaments;
