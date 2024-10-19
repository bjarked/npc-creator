import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Characteristics } from '../../../core/models/npc.model';

@Component({
  selector: 'app-characteristics-form',
  templateUrl: './characteristics-form.component.html',
  styleUrls: ['./characteristics-form.component.scss']
})
export class CharacteristicsFormComponent implements OnInit {
  @Input() characteristics:Characteristics = new Characteristics();
  @Input() viewOnly:boolean = false;
  @Input() selected:boolean = false;
  @Output() characteristicsChange:EventEmitter<Characteristics> = new EventEmitter<Characteristics>()

  constructor() { }

  ngOnInit(): void {
  }

}
