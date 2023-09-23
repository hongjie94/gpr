import { TeamListComponent } from './type'

const TeamList: TeamListComponent =  ({teamsData}) => {
  return (
    <>
      {teamsData.map((team) =>(
        <div key={team.team_id}>
            {team.name}
            {team.acronym}
        </div>
      ))}
    </>
  )
}

export default TeamList