import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-field-area',
  templateUrl: './field-area.component.html',
  styleUrls: ['./field-area.component.css']
})
export class FieldAreaComponent {
  @Input() title?:string;
  @Input() value:string = "";
  @Output() valueChange:EventEmitter<string>= new EventEmitter<string>();

  onChange(event:any) {
    this.value =event.target.value;
    this.valueChange.emit(this.value)
  }

}
