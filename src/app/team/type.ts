import { FunctionComponent } from "react"
import { z } from "zod";

const playerSchema = z.object({
  handle: z.string(),
  last_name: z.string(),
  first_name: z.string(),
});

const teamSchema = z.object({
  team_id: z.string(),
  name: z.string(),
  acronym: z.string(),
  slug: z.string(),
  players: z.array(playerSchema),
});

const teamListComponentPropsSchema = z.object({
  teamList: z.array(teamSchema),
});

const teamGameStaticsComponentPropsSchema = z.object({
  team_id: z.string(),
  teamName: z.string(),
  teamAcronym: z.string(),
});

const gameTeamsSchema = z.object({
  result: z.string(),
  id: z.string(),
  side: z.string(),
});

const playedGamesTypeSchema = z.object({
  game_id: z.string(),
  teams: z.array(gameTeamsSchema),
});

export type PlayedGamesType = z.infer<typeof playedGamesTypeSchema>
export type TeamsType = z.infer<typeof teamSchema>

export type TeamListComponent = FunctionComponent<z.infer<typeof teamListComponentPropsSchema>>
export type TeamGameStaticsComponent = FunctionComponent<z.infer<typeof teamGameStaticsComponentPropsSchema>>