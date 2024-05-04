import { Npc } from "./npc.model";

export class Encounter {
  name:string = "";
  npcs:Npc[] = [];

  static FromData(data:any):Encounter{
    const enc = new Encounter();
    enc.name = data.name;
    enc.npcs = data.npcs.map((npc:any) => Npc.FromData(npc))
    return enc;
  }
}
