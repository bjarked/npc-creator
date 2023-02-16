import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-array',
  templateUrl: './field-array.component.html',
  styleUrls: ['./field-array.component.css']
})
export class FieldArrayComponent  {
  @Input() title?:string;
  @Input() value:string[] = [];
  @Output() valueChange:EventEmitter<string[]>= new EventEmitter<string[]>();

  constructor(){

    this.value.push("1")
    this.value.push("12")
    this.value.push("132")
  }

  onChange(event:any) {
    this.valueChange.emit(this.value)
  }
  add() {
    this.value.push("")
  }

  remove(index:number) {
    this.value.splice(index,1)
  }

}
