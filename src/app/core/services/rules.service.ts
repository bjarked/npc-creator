import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Npc } from '../models/npc.model';
import { Rules } from '../models/rules.model';
import { ToSimpleObject } from 'src/app/shared/utility/object.handler';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  rules$:BehaviorSubject<Rules[]> = new BehaviorSubject<Rules[]>([])

  constructor(private store:AngularFirestore) {
    firstValueFrom(this.store.collection<Rules>(environment.collections.rules).get()).then(
      snapshot => this.rules$.next(snapshot.docs.map(doc => {
        const rule = doc.data()
        rule.id = doc.id
        return rule;
      }))
    )
  }

  public SaveRule(rule:Rules) {
    const id = rule.id ?? rule.name;
    this.store.collection(environment.collections.rules).doc(id).set(ToSimpleObject(rule))
  }

  public DeleteRule(rule:Rules) {
    this.store.collection(environment.collections.rules).doc(rule.id).delete().then(
      _ => this.updateRules(rules => rules.filter(r => r.id != rule.id))
    )
  }

  private updateRules(fnc: (rules:Rules[]) => Rules[]) {
    firstValueFrom(this.rules$).then(
      values => this.rules$.next(fnc(values))
    )
  }

}
