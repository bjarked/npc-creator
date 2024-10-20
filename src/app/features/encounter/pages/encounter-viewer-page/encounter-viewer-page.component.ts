import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Encounter } from 'src/app/core/models/ecounter.model';
import { EncounterService } from 'src/app/core/services/encounter.service';
import { BattleService } from '../../services/battle.service';
import { BattleNpc } from '../../modals/battle-npc.model';

@Component({
  selector: 'app-encounter-viewer-page',
  templateUrl: './encounter-viewer-page.component.html',
  styleUrls: ['./encounter-viewer-page.component.scss']
})
export class EncounterViewerPageComponent {
  public selected: BattleNpc | null  = null;
  public reinforcementOpen : boolean = false;

  constructor(public EncounterService:EncounterService,public battle:BattleService){

  }
  select (battleNpc:BattleNpc) {
    this.selected = battleNpc;
  }

  orderNpcByInit (a:BattleNpc,b:BattleNpc) {
    return b.currentInitiativ - a.currentInitiativ;
  }
  orderNpcByName (a:BattleNpc,b:BattleNpc) {
    return a.name.localeCompare(b.name);
  }
  toggleReinforcementSidebar() {
    this.reinforcementOpen = !this.reinforcementOpen;
  }
}
