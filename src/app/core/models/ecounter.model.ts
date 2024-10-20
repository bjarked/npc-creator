import { Npc } from "./npc.model";
import { RaceModifer,RaceOptions } from "./race.model";
import {CreateRandomNumber} from "../../shared/utility/random"

export class Encounter {
  id?:string;
  name:string = "";
  npcs:Npc[] = [];
  factionMakeUp: FactionMakeUp = new FactionMakeUp(defaultMakeup);

  static FromData(data:any, id?:string):Encounter{
    const enc = new Encounter();
    enc.name = data.name;
    enc.id = data.id;
    enc.factionMakeUp = FactionMakeUp.FromData(data.factionMakeUp);
    enc.npcs = data.npcs.map((npc:any) => Npc.FromData(npc))
    return enc;
  }

  public createEncounter() :Npc[] {
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


export class FactionMakeUp {
  makeup : makeupFaktor [];

  constructor (makeup: makeupFaktor [] = defaultMakeup) {
    this.makeup = makeup;
  }
  static FromData(data:any):FactionMakeUp{
    const makeup = new FactionMakeUp(data?.makeup ?? defaultMakeup);
    return  makeup;
  }

  public getRandomRace () : RaceModifer {
    const totalFactor = this.makeup.reduce( (pre,next) => pre + next.factor,0);
    const randomValue:number = CreateRandomNumber(totalFactor);
    let accumalatedFaktor = 0;
    for (let i = 0; i < this.makeup.length; i++) {
      const race = this.makeup[i];
      accumalatedFaktor += race.factor;
      if (accumalatedFaktor > randomValue) {
        return race.race;
      }
    }
    throw Error(`Error Occured while trying to find a random race. \n
    The Random value was : ` + randomValue + `\n
    and these where the options ` + this.makeup.reduce((pre, next) => pre + "\n Race Faktor " + next.factor ,"") )
  }
}

type makeupFaktor = {factor : number , race : RaceModifer}

const defaultMakeup:makeupFaktor[] = [
  {race : RaceOptions.human, factor : 6},
  {race : RaceOptions.dwarf, factor : 2},
  {race : RaceOptions.elf, factor : 2},
  {race : RaceOptions.orc, factor : 2},
  {race : RaceOptions.troll, factor : 1},
]
