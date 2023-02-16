import { Component, Input, OnInit } from '@angular/core';
import { Npc } from '../../model/npc.model';

@Component({
  selector: 'app-npc-create-form',
  templateUrl: './npc-create-form.component.html',
  styleUrls: ['./npc-create-form.component.css']
})
export class NpcCreateFormComponent implements OnInit {
  @Input() npc:Npc = new Npc();

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.npc)
  }

}
