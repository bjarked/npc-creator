import { Characteristics } from './npc.model';
import type {optionalCharacterisks}from './npc.model';






export class  RaceModifer extends Characteristics {
  name :string;
  constructor (name:string, characteristics?: optionalCharacterisks) {
    super(characteristics)
    this.name = name;
  }

}


export const RaceOptions = {
  'human' : new RaceModifer("Human"),
  'elf' : new RaceModifer("Elf",{agility : 2, charisma : 3, edge : -1}),
  'dwarf' : new RaceModifer("Dwarf",{body : 3, reaction : -1 , strength : 3, willpower : 1, edge : -1, intuition : -1}),
  'orc' : new RaceModifer("Orc",{body : 4,strength : 3, logic : 1, charisma : -1, edge : -1}),
  'troll' : new RaceModifer("Troll",{body : 5, agility : -1, strength : 5, logic : -1, intuition : -1 , charisma : -2, edge : -1}),
}
