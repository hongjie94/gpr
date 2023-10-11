"use client";

import { useQuery } from '@apollo/client';
import { TeamListComponent } from './type'
import { GET_TEAMS } from '../../graphql/queries';

const TeamList: TeamListComponent =  () => {
  const { data, loading } = useQuery(GET_TEAMS);
  if(loading) return <>LOADING ...</>
  const teams = data.teams;
  return (
    <>
      {teams.map((team) =>(
        <div key={team.team_id}>
            {team.name}
            {team.acronym}
        </div>
      ))}
    </>
  )
}

export default TeamList