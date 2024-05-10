import { Component, Input, OnInit } from '@angular/core';
import { NpcService } from 'src/app/core/services/npc.service';
import { Npc } from 'src/app/core/models/npc.model';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-npc-create-form',
  templateUrl: './npc-create-form.component.html',
  styleUrls: ['./npc-create-form.component.css']
})
export class NpcCreateFormComponent implements OnInit {
  @Input() npc:Npc = new Npc();

  constructor(private npcService:NpcService, private loadingService:LoadingService) {
    npcService.npcs$.subscribe(
      npcs => {
        console.log("Npc's");
        console.log(npcs);
      }
    )
  }

  ngOnInit(): void {
  }

  save(){
    this.loadingService.startLoading();
    this.npcService.CreateNewNpc(this.npc).then(res =>
      {
        console.log(res)
      }
    ).finally(
      ()=> this.loadingService.stopLoading()
    )
    console.log(this.npc)
  }
  changeRandomRace() {
    this.npc.race = this.npc.race ? undefined : "";
  }

}
