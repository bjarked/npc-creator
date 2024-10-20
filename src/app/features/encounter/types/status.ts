import { BattleNpc } from "../modals/battle-npc.model";

export type Status = {name:string,message:string};
export type StatusRule = (battleNpc:BattleNpc) => Status | null;
