import { z } from "zod";
import { FunctionComponent } from "react";

// Define validation schemas
const TeamSchema = z.object({
  id: z.string(),
  side: z.string(),
  players: z.array(
    z.object({
      id: z.string(),
      role: z.string(),
    })
  ),
  result: z.object({
    outcome: z.string(),
    gameWins: z.number(),
  }),
  record: z.object({
    wins: z.number(),
    losses: z.number(),
    ties: z.number(),
  }),
});

const GameTeamResultSchema = z.object({
  outcome: z.string(),
});

const GameTeamSchema = z.object({
  id: z.string(),
  side: z.string(),
  result: GameTeamResultSchema,
});

const GameSchema = z.object({
  id: z.string(),
  state: z.string(),
  number: z.number(),
  teams: z.array(GameTeamSchema),
});

const RankingSchema = z.object({
  ordinal: z.number(),
  teams: z.array(TeamSchema),
});

const MatchSchema = z.object({
  id: z.string(),
  mode: z.string(),
  state: z.string(),
  type: z.string(),
  teams: z.array(TeamSchema),
  games: z.array(GameSchema),
});

const SectionSchema = z.object({
  name: z.string(),
  matches: z.array(MatchSchema),
  rankings: z.array(RankingSchema),
});

const StageSchema = z.object({
  name: z.string(),
  sections: z.array(SectionSchema),
});

export const TournamentSchema = z.object({
  tournament_id: z.string(),
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  leagueId: z.string(),
  stages: z.array(StageSchema),
});

const TeamsMapSchema = z.record(
  z.object({
    name: z.string(),
    acronym: z.string(),
  })
);

const PlayersMapSchema = z.record(z.string())

const TournamentTeamsSchema = z.object({
  acronym: z.string(),
  name: z.string(),
  team_id: z.string(),
});
const TournamentPlayersSchema = z.object({
  player_id: z.string(),
  handle: z.string(),
});


// Define props types
const TournamentListPropsSchema = z.object({
  year: z.number(),
  count: z.number(),
});

const HeaderComponentPropsSchema = z.object({
  tournament: TournamentSchema,
});

const TournamentDetailsComponentPropsSchema = z.object({
  tournament: TournamentSchema,
});

const SectionsComponentPropsSchema = z.object({
  section: SectionSchema,
});

const RankingComponentPropsSchema = z.object({
  section: SectionSchema,
  TeamsMap: TeamsMapSchema,
  PlayersMap: PlayersMapSchema
});

const StagesComponentPropsSchema = z.object({
  stages: z.array(StageSchema),
});

const GamesComponentPropsSchema = z.object({
  match: MatchSchema,
  TeamsMap:TeamsMapSchema,
});
const MatchesComponentPropsSchema = z.object({
  PlayersMap: PlayersMapSchema,
  matches: z.array(MatchSchema),
  TeamsMap:TeamsMapSchema,
});

// Export types
export type Params = {
  params: {
    id: string;
  };
};

// export type TeamsMapType = Map<string, { name: string; acronym: string }>;
// export type PlayersMapType = Map<string, string>;

export type TeamsMapType = z.infer<typeof TeamsMapSchema>;
export type PlayersMapType = z.infer<typeof PlayersMapSchema>;
export type TournamentTeamsType = z.infer<typeof TournamentTeamsSchema>;
export type TournamentPlayersType = z.infer<typeof TournamentPlayersSchema>;
export type TournamentType = z.infer<typeof TournamentSchema>;
export type MatchesType = z.infer<typeof MatchSchema>;
export type StagesType = z.infer<typeof StageSchema>;

export type MatchesComponent = FunctionComponent<z.infer<typeof MatchesComponentPropsSchema>>;
export type GamesComponent = FunctionComponent<z.infer<typeof GamesComponentPropsSchema>>;
export type TournamentListComponent = FunctionComponent<z.infer<typeof TournamentListPropsSchema>>;
export type RankingComponent = FunctionComponent<z.infer<typeof RankingComponentPropsSchema>>;
export type HeaderComponent = FunctionComponent<z.infer<typeof HeaderComponentPropsSchema>>;
export type TournamentDetailsComponent = FunctionComponent<z.infer<typeof TournamentDetailsComponentPropsSchema>>;
export type SectionsComponent = FunctionComponent<z.infer<typeof SectionsComponentPropsSchema>>;
export type StagesComponent = FunctionComponent<z.infer<typeof StagesComponentPropsSchema>>;

