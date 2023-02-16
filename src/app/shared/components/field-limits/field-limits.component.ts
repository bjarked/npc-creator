import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Limits } from 'src/app/features/home/model/npc.model';

@Component({
  selector: 'app-field-limits',
  templateUrl: './field-limits.component.html',
  styleUrls: ['./field-limits.component.css']
})
export class FieldLimitsComponent {
  @Input() title?:string;
  @Input() value:Limits = new Limits();
  @Output() valueChange:EventEmitter<Limits>= new EventEmitter<Limits>();

  onChange() {
    this.valueChange.emit(this.value)
  }
  onPhyiscalChange(event:any){
    this.value.physical = event.target.valueAsNumber;
    this.onChange();
  }
  onMentalChange(event:any){
    this.value.mental = event.target.valueAsNumber;
    this.onChange();
  }
  onSocialChange(event:any){
    this.value.social = event.target.valueAsNumber;
    this.onChange();
  }
}
