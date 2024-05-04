import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-selector',
  templateUrl: './multi-selector.component.html',
  styleUrls: ['./multi-selector.component.css']
})
export class MultiSelectorComponent<T> {
  @Input() options:T[] = [];
  @Input() selected:T[] = [];
  @Output() selectedChange:EventEmitter<T[]> = new EventEmitter<T[]>()
  @Input() tostring!:(option:T)=>string;

  select(option:T) {
    if (this.selected.includes(option)) {
      this.selected = this.selected.filter(op => op != option);
    } else {
      this.selected.push(option);
    }
    this.selectedChange.emit(this.selected);
  }
}
