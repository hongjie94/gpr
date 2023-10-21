import { RolesType } from '@/app/team/type';

export default function getRole(id: string, array:RolesType[]){
  const record = array.reduce((acc:any, item:any) => {
    const key = item.player_id;
    if (acc[key]) {
      acc[key][item.role] = (acc[key][item.role] || 0) + item.count;
    } else {
      acc[key] = { player_id: item.player_id, [item.role]: item.count };
    }
    return acc;
  }, {});
  
  const player = record[id];
  const roles = ["support", "bot", "mid", "top", "jungle"];

  // Filter out roles with null or undefined values
  const validRoles = roles.filter((role) => player[role] != null);

  // Find the role with the largest count among the valid roles
  const mainRole = validRoles.reduce((largestRole, role) => {
    if (player[role] > player[largestRole]) {
      return role;
    }
    return largestRole;
  }, validRoles[0]);

  const result = { player_id: player.player_id, mainRole };
  return result;
}
