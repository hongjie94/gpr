import { Tournament } from './../app/tournament/type';
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

    // Tournaments & Tournament
    tournaments: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tournaments.findMany({
        take: args.take,
        skip: args.skip,
        orderBy: {
          startDate: "desc",
        }
      });
    },
    tournament: async (parent: any, args: any, context: Context) => {
      return await context.prisma.tournaments.findFirst({
        where: {
          tournament_id: args.tournament_id
        }
      });
    },

    // Teams & Team
    teams: async (parent: any, args: any, context: Context) => {
      return await context.prisma.teams.findMany({
        take: args.take,
        skip: args.skip,
        orderBy: {
          name: "asc",
        }
      });
    },

    team: async (parent: any, args: any, context: Context) => {
      return await context.prisma.teams.findFirst({
        where: {
          team_id: args.team_id
        }
      });
    },

    // Players & Player
    players: async (parent: any, args: any, context: Context) => {
      return await context.prisma.players.findMany();
    },
    player: async (parent: any, args: any, context: Context) => {
      return await context.prisma.players.findFirst({
        where: {
          player_id: args.player_id
        }
      });
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
      return await context.prisma.teams.findMany({
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
    tournaments: async (parent: any, args: any, context: Context) => {
      const teamId = parent.team_id;
      const tournaments = await context.prisma.tournaments.findMany({
        select: {
          name: true,
          stages: true
        },
      });
      
      
      tournaments.filter((tournament)=> {
        tournament.filter((tournament.stages) => {
          stage.
        })
      })
      // Checks whether an element is even
    
      // Expected output: true
      
      console.log(teamId);

      // return tournaments// console.log(tournaments)
    },
    
  }
};