import { Tournament } from '../app/tournament/type';
export const typeDefs = `#graphql
  type _TournamentIds {
    id: String
  } 
  type _DisplayPriority {
    position: Int
    status: String
  }

  type League {
    id: String  
    league_id: String
    name: String
    slug: String
    sport: String
    image: String
    lightImage: String
    darkImage: String
    region: String  
    priority: Int
    displayPriority: _DisplayPriority
    tournaments:[_TournamentIds]
    tournamentsList: [Tournament]
  }

  type Player {
    id: String  
    player_id: String
    handle: String
    first_name: String
    last_name: String
    home_team_id: String
    PlayerTeam:[Team]
  }

  type Team {
    id: String  
    team_id: String
    name: String
    acronym: String
    slug: String
    players: [Player]
    tournaments: [Tournament]
  }

  type _Record {
    wins: Int
    losses: Int
    ties: Int
  }

  type _Results {
    outcome: String
    gameWins: Int
  } 
  type _Players {
    id: String
    role: String
  }
  type _Teams {
    id: String
    side: String
    record: _Record
    results: _Results 
    players: [_Players]
  }

  type _Strategy {
    type: String
    count: Int
  }

  type _GamesTeamsResults {
    outcome: String
  }

  type _GamesTeams {
    id: String
    side: String
    results: _GamesTeamsResults
  }

  type _Games{
    id: String
    state: String
    number: Int
    teams: [_GamesTeams]
  }

  type _Ranking {
    ordinal: Int
    teams: [_Teams]
  }

  type _Matches {
    id: String
    type: String
    state: String
    mode: String
    strategy: _Strategy
    teams: [_Teams]
    games: [_Games]
  }
  
  type Sections {
    name: String
    matches: [_Matches]
    rankings: [_Ranking]
  }

  type Stages {
    name: String
    type: String
    slug: String
    sections: [Sections]
  }

  type Tournament {
    id: String 
    tournament_id: String
    leagueId: String 
    name: String 
    slug: String
    sport: String
    startDate: String
    endDate: String
    stages: [Stages]
  }
  
  type Query {
    leagues: [League]
    league(league_id: String):League
    matches(team_id: String):_Matches
    
    teams(take: Int, skip: Int): [Team]
    team(team_id: String): Team

    players: [Player]
    player(player_id: String): Player

    tournaments(take: Int, skip: Int): [Tournament]
    tournament(tournament_id: String): Tournament
  }
`;