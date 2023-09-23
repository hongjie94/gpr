import { FunctionComponent } from "react"

export type TeamListItem = {
  team_id: string;
  name: string;
  acronym: string;
  slug: string;
};

// export type UseThemeProps = {
//   theme: string
// }

type TeamListComponentProps = {
  teamsData: TeamListItem[]; 
};
export type TeamListComponent = FunctionComponent<TeamListComponentProps>