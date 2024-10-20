import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-condition-monitor',
  templateUrl: './condition-monitor.component.html',
  styleUrls: ['./condition-monitor.component.scss']
})
export class ConditionMonitorComponent {
  @Input() maxHealth : number = 0;
  @Input() currentHealth : number = 0;
  @Output() currentHealthChange : EventEmitter<number> = new EventEmitter<number>();

  changeHealth(index:number) {
    const damage = index + 1;

    this.currentHealthChange.emit(
      this.currentHealth == this.maxHealth - damage
        ? this.maxHealth
        : this.maxHealth - damage
    );
  }
}
