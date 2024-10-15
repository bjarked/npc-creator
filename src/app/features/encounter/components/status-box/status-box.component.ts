import { Component, Input } from '@angular/core';
import { Npc } from 'src/app/core/models/npc.model';
import { BattleNpc } from '../../modals/battle-npc.model';

@Component({
  selector: 'app-status-box',
  templateUrl: './status-box.component.html',
  styleUrls: ['./status-box.component.scss']
})
export class StatusBoxComponent {
  @Input() npc!:BattleNpc; 
  @Input() selected:boolean = false; 

}
