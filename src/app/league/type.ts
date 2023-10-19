import { FunctionComponent } from "react";
import { z } from "zod";

// Define schemas

export const leagueTournamentSchema = z.object({
  id: z.string(),
});

export const tournamentSchema = z.object({
  endDate: z.string(),
  name: z.string(),
  startDate: z.string(),
  tournament_id: z.string(),
});

export const leaguesListSchema = z.object({
  league_id: z.string(),
  darkImage: z.string(),
  priority: z.number(),
  lightImage: z.string(),
  name: z.string(),
  region: z.string(),
  tournaments: z.array(leagueTournamentSchema),
});

export const leagueSchema = z.object({
  darkImage: z.string(),
  lightImage: z.string(),
  name: z.string(),
  region: z.string(),
  tournamentsList: z.array(tournamentSchema),
});

// Define types

export type Params = {
  params: {
    id: string;
  };
};

export type Tournament = z.infer<typeof tournamentSchema>;
export type League = z.infer<typeof leagueSchema>;

// Define props and components

export const TournamentsProps = z.object({
  tournaments: z.array(tournamentSchema),
});

export type TournamentsComponent = FunctionComponent<z.infer<typeof TournamentsProps>>;
