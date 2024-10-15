import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Encounter } from 'src/app/core/models/ecounter.model';
import { EncounterService } from 'src/app/core/services/encounter.service';
import { BattleService } from '../../services/battle.service';

@Component({
  selector: 'app-encoutner-toolbox',
  templateUrl: './encoutner-toolbox.component.html',
  styleUrls: ['./encoutner-toolbox.component.scss']
})
export class EncoutnerToolboxComponent {
  public encounterSelectorMenuOpen :boolean= false;
  public encounterSearch:BehaviorSubject<string> = new BehaviorSubject<string> ("");
  public filteredEncounters; 
  constructor(public EncounterService:EncounterService, public battle:BattleService){

    this.filteredEncounters = combineLatest([EncounterService.encounter$,this.encounterSearch]).pipe(map(
      ([encounters,search]) => {
        return encounters.filter(encounter => encounter.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      }
    ))

  }
  public openEncounterSelector(set:boolean) {
    this.encounterSelectorMenuOpen = set;
  }
  public select(e:Encounter) {
    this.openEncounterSelector(false);
    this.battle.select(e);
  }
}
