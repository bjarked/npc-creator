import { Component } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';
import { NpcService } from 'src/app/core/services/npc.service';

@Component({
  selector: 'app-template-overview-page',
  templateUrl: './template-overview-page.component.html',
  styleUrls: ['./template-overview-page.component.css']
})
export class TemplateOverviewPageComponent {
  constructor(public npcService:NpcService){

  }

}
