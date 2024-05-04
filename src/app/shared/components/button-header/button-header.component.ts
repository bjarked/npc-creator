import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.css']
})
export class ButtonHeaderComponent {
  @Input() text:string ="";
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  Click() {
    this.onClick.emit();
  }

}
