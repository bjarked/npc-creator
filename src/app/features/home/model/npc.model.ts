export class Npc {
  name:string = ""
  characteristics:Characteristics = new Characteristics();
  initiative:string = "0";
  conditionMonitor:string = "0";
  limits:Limits = new Limits();
  armour:string = "0";
  skills:string = "";
  qualities:string = "";
  gear:Gear[] = []

}


export class Characteristics {
  body:number;
  agility:number;
  reaction:number;
  strength:number;
  charisma:number;
  intuition:number;
  logic:number;
  willpower:number;
  edge:number;
  magic?:number;
  constructor (body:number = 1,agility:number = 1,reaction:number = 1,strength:number = 1,charisma:number = 1,
    intuition:number = 1,logic:number = 1,willpower:number = 1,edge:number = 1, magic?:number ){
      this.body = body;
      this.agility = agility;
      this.reaction = reaction;
      this.strength = strength;
      this.charisma = charisma;
      this.intuition = intuition;
      this.logic = logic;
      this.willpower = willpower;
      this.edge = edge;
      this.magic = magic;
  }
}

export class Limits {
  physical:number = 0;
  mental:number = 0;
  social:number = 0;
}

export class Skill {
  name:string = ""
  value:number = 0
}

export class Gear {
  name:string = "";
  type:string = "";
  desription:string = "";
}
