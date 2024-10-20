import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {
  @Input() title?:string;
  @Input() instantChange:boolean = false;
  @Input() value:string = "";
  @Output() valueChange:EventEmitter<string>= new EventEmitter<string>();
  @Output() onEnter:EventEmitter<void>= new EventEmitter<void>();
  @Output() onSelected:EventEmitter<void> = new EventEmitter<void>();
  @Output() onUnselected:EventEmitter<void> = new EventEmitter<void>();


  onChange(event:any) {
    if (this.instantChange) return;
    this.value =event.target.value;
    this.valueChange.emit(this.value);
  }
  click () {
    this.onSelected.emit();
  }
  unselected () {
    this.onUnselected.emit();
  }
  onInputChange(event:any) {
    if (!this.instantChange) return;
    this.value =event.target.value;
    this.valueChange.emit(this.value);
  }

  onKeypress(event:any) {
    if (event.key === "Enter") {
      this.onChange(event);
      setTimeout(()=> this.onEnter.emit(),0);
    }
  }

}
