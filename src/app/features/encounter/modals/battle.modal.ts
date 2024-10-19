import { Encounter } from "src/app/core/models/ecounter.model";
import { Npc } from "src/app/core/models/npc.model";
import { BattleNpc } from "./battle-npc.model";

export class Battle extends Encounter {

    constructor (enc:Encounter) {
        super();
        
        this.id = enc.id;
        this.name = enc.name;
        this.npcs = enc.npcs;
        this. FactionMakeUp = new FactionMakeUp(defaultMakeup);
    }

    
  public createEncounter() :BattleNpc[] {
    return this.npcs.map (npc => {
      const clone = npc.deepCopy();
      if (clone.race) return clone;
      const race =this.factionMakeUp.getRandomRace()
      clone.characteristics = clone.characteristics.add(race);
      clone.race = race.name;
      return clone;
    })
  }
}