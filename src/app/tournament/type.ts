import { z } from "zod";

const Tournament = z.object({
  tournament_id: z.string(),
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  leagueId: z.string(),
})

export type Tournament = z.infer<typeof Tournament>
