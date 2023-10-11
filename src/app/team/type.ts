import { FunctionComponent } from "react"

export type Teams = {
  team_id: string;
  name: string;
  acronym: string;
  slug: string;
};

// export type UseThemeProps = {
//   theme: string
// }

type TeamListComponentProps = {
  teamsData: Teams[]; 
};
export type TeamListComponent = FunctionComponent<TeamListComponentProps>