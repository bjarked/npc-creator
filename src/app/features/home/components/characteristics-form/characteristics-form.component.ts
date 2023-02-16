import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Characteristics } from '../../model/npc.model';

@Component({
  selector: 'app-characteristics-form',
  templateUrl: './characteristics-form.component.html',
  styleUrls: ['./characteristics-form.component.css']
})
export class CharacteristicsFormComponent implements OnInit {
  @Input() characteristics:Characteristics = new Characteristics();
  @Output() characteristicsChange:EventEmitter<Characteristics> = new EventEmitter<Characteristics>()

  constructor() { }

  ngOnInit(): void {
  }

}
