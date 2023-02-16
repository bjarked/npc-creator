import { Injectable } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { ToSimpleObject } from 'src/app/shared/utility/object.handler';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NpcService {
  npcs$:BehaviorSubject<Npc[]> = new BehaviorSubject<Npc[]>([])

  constructor(private store:AngularFirestore) {
    firstValueFrom(this.store.collection(environment.collections.npcs).get()).then(
      snapshot => this.npcs$.next(snapshot.docs.map(doc => Npc.FromData(doc.data())))
    )
   }


  CreateNewNpc(npc:Npc) {
    return this.store.collection(environment.collections.npcs).doc(npc.name).set(ToSimpleObject(npc))

  }
}
