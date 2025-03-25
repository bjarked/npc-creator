import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Spell } from '../models/spell.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArmouryService {
  $spells:BehaviorSubject<Spell[]> = new BehaviorSubject<Spell[]>([]);
  constructor(private store:AngularFirestore) { 
    
  }
}
