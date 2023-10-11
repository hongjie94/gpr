import { FunctionComponent } from "react"

type TournamentsProps = {
  tournaments: Tournament[];
}

type Tournament = {
  endDate: string;
  name: string;
  startDate: string;
  tournament_id: string;
  __typename: string;
}

export type Params = {
  params: {
    id: string;
  };
};

export type TournamentsComponent = FunctionComponent<TournamentsProps>