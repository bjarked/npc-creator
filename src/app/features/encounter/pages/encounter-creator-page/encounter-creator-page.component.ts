import { Component } from '@angular/core';
import { Encounter } from 'src/app/core/models/ecounter.model';
import { Npc } from 'src/app/core/models/npc.model';
import { EncounterService } from 'src/app/core/services/encounter.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { NpcService } from 'src/app/core/services/npc.service';

@Component({
  selector: 'app-encounter-creator-page',
  templateUrl: './encounter-creator-page.component.html',
  styleUrls: ['./encounter-creator-page.component.css']
})
export class EncounterCreatorPageComponent {
  encounter:Encounter = new Encounter();
  constructor(public npcService:NpcService, public encounterService:EncounterService, private loading:LoadingService){

  }

  npcTostring(npc:Npc){
    return npc.name;
  }
  save() {
    this.loading.startLoading();
    this.encounterService.CreateNewEncounter(this.encounter).finally(
      ()=> this.loading.stopLoading()
    )
  }
  addNPC(npc:Npc) {
    this.encounter.npcs.push(npc);
  }
  removeNpc(index:number) {
    this.encounter.npcs = this.encounter.npcs.filter((_,i) => i != index);
  }

  editEncounter(enc:Encounter) {
    this.encounter = enc;
  }

  newEncouter() {
    this.encounter = new Encounter();

  }

}
