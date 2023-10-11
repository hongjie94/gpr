import { FunctionComponent } from "react"
import { z } from "zod"

export const playerSchema = z.object({
  player_id: z.string(),
  handle: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  home_team_id: z.any().nullish(),
})

export const teamSchema = z.object({
  name: z.string(),
  acronym: z.string(),
})

export type Player = z.infer<typeof playerSchema>
export type Team = z.infer<typeof teamSchema>
export type PlayerListComponent = FunctionComponent