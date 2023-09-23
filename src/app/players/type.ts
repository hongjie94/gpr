import { FunctionComponent } from "react"


export type PlayerListItem = {
  player_id: string;
  handle: string;
  first_name: string;
  last_name: string;
  home_team_id: string;
};

// export type UseThemeProps = {
//   theme: string
// }

type PlayerListComponentProps = {
  playersData: PlayerListItem[]; 
};
export type PlayerListComponent = FunctionComponent<PlayerListComponentProps>