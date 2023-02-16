export class Npc {
  name:string = ""
  characteristics:Characteristics = new Characteristics();
  initiative:string = "0";
  conditionMonitor:string = "0";
  limits:Limits = new Limits();
  armour:string = "0";
  skills:string = "";
  qualities:string = "";
  gear:string[] = []

  static FromData(data:any):Npc {
    const npc:Npc = new Npc();
    npc.name = data.name;
    npc.characteristics = Characteristics.FromData(data.characteristics);
    npc.initiative = data.initiative;
    npc.conditionMonitor = data.conditionMonitor;
    npc.limits = Limits.FromData(data.limits);
    npc.armour = data.armour;
    npc.skills = data.skills;
    npc.qualities = data.qualities;
    npc.gear = data.gear;
    return npc;
  }
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
  static FromData(data:any):Characteristics {
    return new Characteristics(
      data.body,
      data.agility,
      data.reaction,
      data.strength,
      data.charisma,
      data.intuition,
      data.logic,
      data.willpower,
      data.edge,
      data.magic,);
  }
}

export class Limits {
  physical:number = 0;
  mental:number = 0;
  social:number = 0;
  static FromData(data:any):Limits {
    const limit = new Limits();
    limit.physical = data.physical;
    limit.mental = data.mental;
    limit.social = data.social;
    return limit;
  }
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
