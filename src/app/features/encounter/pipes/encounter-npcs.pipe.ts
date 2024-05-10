import { Pipe, PipeTransform } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';
import { Encounter } from '../../../core/models/ecounter.model';

@Pipe({
  name: 'encounterNpcs'
})
export class EncounterNpcsPipe implements PipeTransform {

  transform(enc: Encounter | null): Npc [] {
    return enc?.createEncounter() ?? [];
  }

}
