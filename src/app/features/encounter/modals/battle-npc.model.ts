import { Npc } from "src/app/core/models/npc.model";
import { roll } from "src/app/shared/utility/roller";
import { StatusRule, Status } from "../types/status";
import { DamagedStatus } from "../strategies/status-rules";
import { Battle } from "./battle.modal";


export class BattleNpc extends Npc {
    public currentConditionMonitor: number;
    public currentInitiativ : number = 0;
    private statusRules : StatusRule [] = []

    constructor (npc:Npc) {
        super(npc.name,npc.characteristics,npc.initiative,npc.conditionMonitor,npc.limits,npc.armour,npc.skills,npc.qualities,npc.race,npc.gear);
        this.currentConditionMonitor = this.getBasicConditionMonitor ();
        this.rollInitiativ();
        this.statusRules.push(DamagedStatus);
    }

    public setRace(battle:Battle) {
      if (this.race) return;
      const race = battle.factionMakeUp.getRandomRace()
      this.characteristics.add(race);
      this.race = race.name;
    }

    public isDead () :boolean {
      return this.currentConditionMonitor == 0;
    }

    public getName () : string {
      const surfix = this.isDead() ? "(Dead) " : "";
      return surfix + " " + this.name;
    }

    public damagedModifier():number {
      return Math.floor((this.getBasicConditionMonitor() - this.currentConditionMonitor) / 3);
    }


    public getStatuses() : Status [] {
      const statuses: Status[] = [];
      this.statusRules.forEach(func => {
        const status = func(this);
        if (status) statuses.push(status);
      })
      return statuses;
    }

    public updateInitiativ(change:number) {
      const newInit = this.currentInitiativ + change;
      this.currentInitiativ = newInit > 0 ? newInit : 0;
    }

    public rollInitiativ () {
      this.currentInitiativ =  roll(this.getInitiative()) - this.damagedModifier();
    }
    public nextPhase () {
        this.updateInitiativ(- 10);
    }
}
