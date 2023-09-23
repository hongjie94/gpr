import { FunctionComponent } from "react"

export type TournamentListItem = {
  id: string;
  leagueId: string;
  name: string;
  slug: string;
  sport: string;
  startDate: string;
  endDate: string;
  stages: object[];
};

// export type UseThemeProps = {
//   theme: string
// }

type TournamentListComponentProps = {
  tournamentsData: TournamentListItem[]; 
};
export type TournamentListComponent = FunctionComponent<TournamentListComponentProps>