import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ToSimpleObject } from 'src/app/shared/utility/object.handler';
import { environment } from 'src/environments/environment';
import { Encounter } from '../models/ecounter.model';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {
encounter$:BehaviorSubject<Encounter[]> = new BehaviorSubject<Encounter[]>([])

constructor(private store:AngularFirestore) {
  firstValueFrom(this.store.collection(environment.collections.encounters).get()).then(
    snapshot => this.encounter$.next(snapshot.docs.map(doc => Encounter.FromData(doc.data(),doc.id)))
  )
 }


  CreateNewEncounter(enc:Encounter) {
    return this.store.collection(environment.collections.encounters).doc(enc.name).set(ToSimpleObject(enc));
  }


}
