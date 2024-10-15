import { Npc } from "src/app/core/models/npc.model";
import { roll } from "src/app/shared/utility/roller";

export class BattleNpc extends Npc {
    public currentConditionMonitor: number;
    public currentInitiativ : number = 0;

    constructor (npc:Npc) {
        super(npc.name,npc.characteristics,npc.initiative,npc.conditionMonitor,npc.limits,npc.armour,npc.skills,npc.qualities,npc.race,npc.gear);
        this.currentConditionMonitor = this.getBasicConditionMonitor ();
        this.rollInitiativ();
    }

    public rollInitiativ () {
        this.currentInitiativ =  roll(this.initiative)
    }
    public nextPhase () {
        console.log("nextPhase");
        const init = this.currentInitiativ - 10;
        this.currentInitiativ = init > 0 ? init : 0;
    }
}