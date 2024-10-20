import { StatusRule } from "../types/status";

export const DamagedStatus: StatusRule = (npc) => {
  const modifier = npc.damagedModifier();
  if (modifier == 0) return null;

  return {name:"Damaged",message: "-" +  modifier};
}
