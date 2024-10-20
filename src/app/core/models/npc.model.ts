export class Npc {
  name:string;
  characteristics:Characteristics;
  initiative:string;
  conditionMonitor:string ;
  limits:Limits;
  armour:string;
  skills:string;
  qualities:string;
  race? : string;
  useBasicStats: boolean = true;
  gear:string[];
  standardActions:string[];

  getInitiative() {
    return this.useBasicStats
      ? this.characteristics.reaction + this.characteristics.intuition + " + 1d6"
      : this.initiative;
  }

  getBasicLimitMental() {
    return Math.ceil((this.characteristics.logic * 2 + this.characteristics.intuition + this.characteristics.willpower) / 3);
  }
  getBasicLimitPhysical() {
    return Math.ceil((this.characteristics.strength * 2 + this.characteristics.body + this.characteristics.reaction) / 3);
  }
  getBasicLimitSocial() {
    return Math.ceil((this.characteristics.charisma * 2 + this.characteristics.willpower + 6) / 3);
  }

  getBasicConditionMonitor () {
    return 8 + Math.ceil((this.characteristics.body + this.characteristics.willpower) / 2);
  }

  constructor (
      name = "",
      characteristics = new Characteristics(),
      initiative = "0",
      conditionMonitor = '0',
      limits =  new Limits(),
      armour = "0",
      skills: string = "",
      qualities = "",
      race?:string ,
      gear:string[] = [],
      standardActions:string[] = []){
    this.name = name;
    this.characteristics = characteristics,
    this.initiative = initiative;
    this.conditionMonitor =conditionMonitor;
    this.limits =limits;
    this.armour =armour;
    this.skills =skills;
    this.qualities =qualities;
    this.race =race;
    this.gear = gear;
    this.standardActions = standardActions;
  }

  public deepCopy () :Npc {
    return new Npc (
      this.name,
      this.characteristics.deepCopy(),
      this.initiative,
      this.conditionMonitor,
      this.limits.deepCopy(),
      this.armour,
      this.skills,
      this.qualities,
      this.race,
      this.gear.map(g => g)
    )
  }

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
    npc.race = data.race;
    npc.gear = data.gear;
    return npc;
  }
}


export type optionalCharacterisks = {
  body?:number;
  agility?:number;
  reaction?:number;
  strength?:number;
  charisma?:number;
  intuition?:number;
  logic?:number;
  willpower?:number;
  edge?:number;
  magic?:number;
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
  constructor (characteristics : optionalCharacterisks = {}){
      this.body = characteristics.body ?? 1;
      this.agility = characteristics.agility ?? 1;
      this.reaction = characteristics.reaction ?? 1;
      this.strength = characteristics.strength ?? 1;
      this.charisma = characteristics.charisma ?? 1;
      this.intuition = characteristics.intuition ?? 1;
      this.logic = characteristics.logic ?? 1;
      this.willpower = characteristics.willpower ?? 1;
      this.edge = characteristics.edge ?? 1;
      this.magic = characteristics.magic;
  }
  public deepCopy () {
    return new Characteristics (
      {
        body: this.body,
        agility: this.agility,
        reaction: this.reaction,
        strength: this.strength,
        charisma: this.charisma,
        intuition: this.intuition,
        logic: this.logic,
        willpower: this.willpower,
        edge: this.edge,
        magic: this.magic,
      }
    )
  }
  static FromData(data:any):Characteristics {
    return new Characteristics(
      data);
  }

  public math( other:Characteristics, oprant : "+" | "-") {
    return this.map ((value,key) => {
      switch (oprant) {
        case "+" : return value + (other[key] ?? 0);
        case "-" :  return value - (other[key] ?? 0);
      }
    })

  }

  public subtract (other:Characteristics) {
    return this.math(other,'-');
  }
  public add (other:Characteristics) {
    return this.math(other,'+');
  }

  public map (fnc:(n:number,key:keyof optionalCharacterisks) => number) : Characteristics {
    const clone = this.deepCopy()
    clone.body = fnc(clone.body, 'body');
    clone.agility = fnc(clone.agility, 'agility');
    clone.strength = fnc(clone.strength, 'strength');
    clone.charisma = fnc(clone.charisma, 'charisma');
    clone.intuition = fnc(clone.intuition, 'intuition');
    clone.logic = fnc(clone.logic, 'logic');
    clone.willpower = fnc(clone.willpower, 'willpower');
    clone.edge = fnc(clone.edge, 'edge');
    clone.magic = clone.magic ? fnc(clone.magic, 'magic') : clone.magic;
    return clone;
  }

}

export class Limits {
  physical:number ;
  mental:number ;
  social:number;
  constructor (physical = 0,mental = 0,social= 0 ) {
    this.physical = physical;
    this.mental = mental;
    this.social = social;
  }

  static FromData(data:any):Limits {
    const limit = new Limits();
    limit.physical = data.physical;
    limit.mental = data.mental;
    limit.social = data.social;
    return limit;
  }
  public deepCopy (): Limits {
    return new Limits(
      this.physical,
      this.mental,
      this.social
    )
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

