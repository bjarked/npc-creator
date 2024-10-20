import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field-checkmark',
  templateUrl: './field-checkmark.component.html',
  styleUrls: ['./field-checkmark.component.css']
})
export class FieldCheckmarkComponent {
  @Input() title?:string;
  @Input() value:boolean = false;
  @Output() valueChange:EventEmitter<boolean>= new EventEmitter<boolean>();

  onChange(event:any) {
    this.value =event.target.checked;
    this.valueChange.emit(this.value)
  }

}
