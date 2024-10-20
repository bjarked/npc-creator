import { Encounter, FactionMakeUp } from "src/app/core/models/ecounter.model";
import { BattleNpc } from "./battle-npc.model";
import { Npc } from "src/app/core/models/npc.model";

export class Battle extends Encounter {
  private currentNPCIndex = 0;
  constructor (enc:Encounter) {
      super();

      this.id = enc.id;
      this.name = enc.name;
      this.npcs = enc.npcs;
      this.factionMakeUp = enc.factionMakeUp;
  }

  getNewIndex() {
    return (this.currentNPCIndex ++)
  }


  getBasicReinforcements():Npc [] {
    const map = this.npcs.reduce<Map<string,Npc>>((hashmap,npc)=> {
      if (!hashmap.has(npc.name)) hashmap.set(npc.name,npc);
      return hashmap;
    },new Map<string,Npc>());
    return Array.from(map.values());
  }


  public createEncounter() :BattleNpc[] {
    return this.npcs.map (npc =>
      this.generateBattleNpc(npc)
    );
  }

  public generateBattleNpc(npc:Npc):BattleNpc {
    const bNpc = new BattleNpc(npc);
    bNpc.name += " " + this.getNewIndex();
    bNpc.setRace(this);
    return bNpc;
  }
}
