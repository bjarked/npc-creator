import { Injectable } from '@angular/core';
import { combineChange } from '@angular/fire/compat/firestore';
import { BehaviorSubject, combineLatest, firstValueFrom, map, Subject, Subscription, tap } from 'rxjs';
import { Encounter } from 'src/app/core/models/ecounter.model';
import { BattleNpc } from '../modals/battle-npc.model';
import { Battle } from '../modals/battle.modal';
import { Npc } from 'src/app/core/models/npc.model';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  subs:Subscription = new Subscription();
  encounter$:BehaviorSubject<Battle | null> = new BehaviorSubject<Battle |null>(null);
  private refresh$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  npcs$: BehaviorSubject<BattleNpc [] | null> = new BehaviorSubject<BattleNpc [] | null>(null);

  constructor() {
    this.subs.add(
      combineLatest([this.encounter$,this.refresh$]).subscribe(([e,r]) => {
        this.npcs$.next(
          e ? e.createEncounter() : null
        )
      })
    )

   }
  select(encounter:Encounter | null) {
    this.encounter$.next(encounter ? new Battle(encounter) : null);
  }
  public refresh() {
    this.refresh$.next(true);
  }
  public nextPhase () {
    firstValueFrom(this.npcs$).then(
      npcs => {
        if (!npcs) return;
        npcs.map(npc => npc.nextPhase());
        this.npcs$.next(npcs);
      }
    )
  }
  public newRound () {
    firstValueFrom(this.npcs$).then(
      npcs => {
        if (!npcs) return;
        npcs.map(npc => npc.rollInitiativ());
        const newNpcs = Array.from(npcs);
        this.npcs$.next(newNpcs);
      }
    )
  }

  public addReinforcement (npc:Npc) {
    firstValueFrom(combineLatest([this.npcs$,this.encounter$])).then(([npcs,encounter])=> {
      if(!npcs ||!encounter) return;
      npcs.push(encounter.generateBattleNpc(npc));
      this.npcs$.next(Array.from(npcs));
    })
  }

}
