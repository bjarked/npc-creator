import { Component, Input } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';

@Component({
  selector: 'app-npc-viewer',
  templateUrl: './npc-viewer.component.html',
  styleUrls: ['./npc-viewer.component.css']
})
export class NpcViewerComponent {
  @Input() npc:Npc = new Npc();

}
