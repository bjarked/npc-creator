import { Component } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';
import { NpcService } from 'src/app/core/services/npc.service';

@Component({
  selector: 'app-create-template-page',
  templateUrl: './create-template-page.component.html',
  styleUrls: ['./create-template-page.component.css']
})
export class CreateTemplatePageComponent {
  npc:Npc = new Npc();
  constructor(public npcService:NpcService ) {

  }
  select (npc:Npc) {
    this.npc = npc;
  }
  newNPC() {
    this.npc = new Npc()
  }
}
