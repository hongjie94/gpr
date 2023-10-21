import { Context } from "@/app/api/graphql/route";

export const resolvers = {
  Query: {
    // Leagues & League
    leagues: async (parent: any, args: any, context: Context) => {
      return await context.prisma.leagues.findMany({
        orderBy: {
          priority: "asc",
        },
      });
    },

    league: async (parent: any, args: any, context: Context) => {
      return await context.prisma.leagues.findUnique({
        where: {
          league_id: args.league_id
        }
      });
    },

    games: async (parent: any, args: any, context: Context) => {
      return await context.prisma.games.findMany({
        where: {
          teams: {
            some: {
              id: args.team_id
            }
          },
        },
      });
    },

    // Tournaments & Tournament
    tournaments: async (parent: any, args: any, context: Context) => {
      let lte: string = "";
      let gte: string = "";

      // Define date ranges for each year
      const yearDateRanges: Record<number, { lte: string; gte: string }> = {
        2020: { lte: "2020-12-31", gte: "2020-01-01" },
        2021: { lte: "2021-12-31", gte: "2021-01-01" },
        2022: { lte: "2022-12-31", gte: "2022-01-01" },
        2023: { lte: "2023-12-31", gte: "2023-01-01" },
      };
      let filteredDate = yearDateRanges[args.year] || { lte, gte };
      return await context.prisma.tournaments.findMany({
        take: args.take,
        skip: args.skip,
        where: {
          startDate: filteredDate
        },
        orderBy: {
          startDate: "desc",
        }
      })
    },

    tournament: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tournaments.findUnique({
        where: {
          tournament_id: args.tournament_id,
        }
      })
    },


    // Teams & Team
    teams: async (parent: any, args: any, context: Context) => {
      return await context.prisma.teams.findMany({
        take: args.take,
        skip: args.skip,

      });
    },

    team: async (parent: any, args: any, context: Context) => {
      return await context.prisma.teams.findUnique({
        where: {
          team_id: args.team_id
        }
      });
    },

    // Players & Player 110848560874526298
    players: async (parent: any, args: any, context: Context) => {
      return await context.prisma.players.findMany();
    },
    player: async (parent: any, args: any, context: Context) => {
      return await context.prisma.players.findUnique({
        where: {
          player_id: args.player_id
        }
      });
    },

    roles: async (parent: any, args: any, context: Context) => {
      return await context.prisma.roles.findMany();
    },
  },

  League: {
    tournamentsList: async (parent: any, args: any, context: Context) => {
      const arrayOfTournamentsIds: string[] = parent.tournaments.map((obj: { id: string }) => obj.id);
      return await context.prisma.tournaments.findMany({
        where: {
          tournament_id: { in: arrayOfTournamentsIds },
        },
        orderBy: {
          startDate: "desc",
        }
      });
    }
  },

  Player: {
    PlayerTeam: async (parent: any, args: any, context: Context) => {
      return await context.prisma.teams.findUnique({
        where: {
          team_id: parent.home_team_id,
        },
      });
    }
  },
  Team: {
    players: async (parent: any, args: any, context: Context) => {
      return await context.prisma.players.findMany({
        where: {
          home_team_id: parent.team_id
        },
      });
    },
  },
};