import { PlayerListComponent } from "./type"

const PlayerList: PlayerListComponent =  ({playersData}) => {
  return (
    <>
       {playersData.map((player)=>(
        <div key={player.player_id}>
        { player.handle}
          player_id:{ player.player_id}
          handle: { player.handle}
          first_name: { player.first_name}
          last_name:{ player.last_name}
          home_team_id: { player.home_team_id}
        </div>
      ))}
    </>
  )
}
export default PlayerList;
