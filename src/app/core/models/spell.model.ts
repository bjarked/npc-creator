// General Spell traits
export type SpellDomain = "physical" | "mana";
export type SpellRange = "line of sight" | "touch" | "area";
export type SpellDuration = "instanctaneous" | "sustained" | "permanet";
export type SpellDrain = string;
export type SpellType = "general" | "combat" |"detection" | "illusion" | "manipulation";

// Combat Spell traits
export type SpellCombatDamage = "physical" | "stun";
export type SpellCombatDirection = "direct" | "indirect";

// Detection Spell Traits
export type SpellDetectionSense = "active" |"passive";
export type SpellDetectionDirection = "directional" | "psychic" | "area" | "extended area";

// Illusion Spell Traits
export type SpellIllusionQuality = "realistic" | "obvious";
export type SpellIllusionSense = "single" | "multi";

// Manipulation Spell Traits
export type SpellManipulation = "mental" | "environmental" | "physical";

export class Spell {
    name:string = "";
    spellType:SpellType = "general";
    type:SpellDomain = "physical";
    range:SpellRange = "line of sight";
    duration:SpellDuration = "instanctaneous";
    drain:SpellDrain = "F";
    description:string = "";

    constructor (spell? :Spell) {
        if (spell) return Spell.SetDataFromData(this,spell);
    }
    
    static FromData(data:any):Spell {
        return Spell.SetDataFromData(new Spell(),data);;
    }
    static SetDataFromData (spell:Spell,data:any) {
        spell.spellType = "general";
        spell.name = data.name;
        spell.type = data.type;
        spell.range = data.range;
        spell.duration = data.duration;
        spell.drain = data.drain;
        spell.description = data.description;
        return spell;
    }
}

export class CombatSpell extends Spell {
    damage:SpellCombatDamage = "physical";
    direction:SpellCombatDirection = "direct";
    spellType:SpellType = "combat";

    constructor (spell? :Spell) {
        super(spell);
        if (spell) return CombatSpell.SetDataFromData(this,spell);
    }

    static FromData(data:any):CombatSpell {
        return CombatSpell.SetDataFromData(new CombatSpell(),data);;
    }
    static SetDataFromData (spell:CombatSpell,data:any) {
        super.SetDataFromData(spell,data);
        spell.spellType = "combat";
        spell.damage = data.damage;
        spell.direction = data.direction;
        return spell;
    }
}

export class DetectionSpell extends Spell {
    sense: SpellDetectionSense = "active" ;
    direction : SpellDetectionDirection = "directional";
    spellType:SpellType = "detection";
    
    constructor (spell? :Spell) {
        super(spell);
        if (spell) return DetectionSpell.SetDataFromData(this,spell);
    }

    static FromData(data:any):DetectionSpell {
        return DetectionSpell.SetDataFromData(new DetectionSpell(),data);;
    }
    static SetDataFromData (spell:DetectionSpell,data:any):DetectionSpell {
        super.SetDataFromData(spell,data);
        spell.spellType = "detection";
        spell.sense = data.sense;
        spell.direction = data.direction;
        return spell;
    }

}