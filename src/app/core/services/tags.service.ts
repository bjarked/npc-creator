import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ToSimpleObject } from 'src/app/shared/utility/object.handler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  tags$:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  constructor(private store:AngularFirestore) {
    firstValueFrom(this.store.collection(environment.collections.tags).doc(environment.collections.tags).get()).then(
      snapshot => {
        if (!snapshot.exists) return;
        this.tags$.next((snapshot.data() as any).tags as string[] ?? [])
      }
    )
   }

   public async addNewTag(tag:string) {
    const tags = await firstValueFrom(this.tags$);
    if (tags.includes(tag)) return;
    tags.push(tag);
    this.store.collection(environment.collections.tags).doc(environment.collections.tags).set(ToSimpleObject({ tags: tags })).then(
      (response) => {
        this.tags$.next(tags);
      }
    ).catch(error => { console.log(error); });
   }
}
