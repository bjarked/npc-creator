import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field-array',
  templateUrl: './field-array.component.html',
  styleUrls: ['./field-array.component.css']
})
export class FieldArrayComponent  {
  @Input() title?:string;
  @Input() value:string[] = [];
  @Input() viewOnly:boolean = false;
  @Output() valueChange:EventEmitter<string[]>= new EventEmitter<string[]>();

  constructor(){

    this.value.push("1")
    this.value.push("12")
    this.value.push("132")
  }

  onChange() {
    this.valueChange.emit(this.value)
  }
  add() {
    this.value.push("")
    this.valueChange.emit(this.value)
  }

  remove(index:number) {
    this.value.splice(index,1)
    this.valueChange.emit(this.value)
  }

  update(event:any,index:number) {
    this.value[index] = event.target.value;
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
