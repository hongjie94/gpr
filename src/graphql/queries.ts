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
  query Tournaments($take: Int, $skip: Int) {
    tournaments(take: $take, skip: $skip) {
      name
      leagueId
      startDate
      tournament_id 
      endDate
    }
}
`;

export const GET_TOURNAMENT = gql`
 query Tournament($id: String) {
  tournament(tournament_id: $id) {
    name
    leagueId
    stages {
      name
      sections {
        matches {
          games {
            id
            number
            state
            teams {
              id
              results {
                outcome
              }
              side
            }
          }
          id
          mode
          state
          strategy {
            count
            type
          }
          teams {
            side
            results {
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
            id
          }
          type
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
            results {
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