import { FunctionComponent } from "react"

// Define the type for a single league item
export type LeagueListItem = {
  id: string;
  name: string;
  slug: string;
  sport: string;
  image: string;
  lightImage: string;
  darkImage: string;
  region: string;
  priority: number;
  displayPriority: object;
  tournaments: object[];
};
export type UseThemeProps = {
  theme: string
}
// Define the type for the LeagueList component props
type LeagueListComponentProps = {
  leaguesData: LeagueListItem[]; // Include the leaguesData prop here
};
export type LeagueListComponent = FunctionComponent<LeagueListComponentProps>


