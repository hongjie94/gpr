import { gql } from '@apollo/client'

export const GET_LEAGUES = gql`
  query Leagues {
    leagues {
      darkImage
      id
      league_id
      lightImage
      name
      region
      priority
      tournaments {
        id
      }
    }
  }
`;

export const GET_LEAGUE = gql`
  query League($id: String) {
    league(league_id: $id) {
      tournamentsList {
        tournament_id
        name
        startDate
        endDate
      }
      name
      lightImage
      darkImage
      region
    }
  }
`;

export const GET_TOURNAMENTS = gql`
  query Tournaments($take: Int, $skip: Int, $year: Int) {
    tournaments(take: $take, skip: $skip, year: $year) {
      name
      leagueId
      startDate
      tournament_id 
      endDate
    }
}
`;

export const GET_GAMES_TEAMS = gql`
  query GameTeams($team_id: String) {
    games(team_id: $team_id) {
      teams {
        result
        id
        side
      }
      game_id
    }
}`
;

export const GET_TOURNAMENT = gql`
 query Tournament($tournament_id: String!) {
  tournament(tournament_id: $tournament_id) {
    name
    leagueId
    stages {
      name
      sections {
        matches {
          id
          mode
          state
          teams {
            id
            side
            result {
              outcome
              gameWins
            }
            record {
              wins
              ties
              losses
            }
            players {
              id
              role
            }
          }
          type
          games{
            id
            state
            number
            teams {
              id
              side
              result{
                outcome
              }
            }
          }
        }
        name
        rankings {
          ordinal
          teams {
            id
            players {
              role
              id
            }
            record {
              ties
              losses
              wins
            }
            result {
              outcome
              gameWins
            }
            side
          }
        }
      }
    }
    startDate
    endDate
  }
}
`;

export const GET_PLAYERS= gql`
 query Players {
  players {
    handle
    first_name
    last_name
    home_team_id
    player_id
  }
}
`;


export const GET_TEAMS= gql`
query Teams($take: Int, $skip: Int) {
  teams(take: $take, skip: $skip) {
    team_id
    name
    acronym
    players {
      first_name
      last_name
      handle
    }
  }
}
`;

export const GET_TEAM= gql`
 query Team($id: String) {
  team(team_id: $id) {
    team_id
    name
    acronym
  }
}
`;

export const GET_TOURNAMENT_TEAMS= gql`
 query TournamentTeams {
  teams {
    team_id
    name
    acronym
  }
  players {
    player_id
    handle
  }
}
`;