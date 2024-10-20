import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-header',
  templateUrl: './button-header.component.html',
  styleUrls: ['./button-header.component.scss']
})
export class ButtonHeaderComponent {
  @Input() text:string ="";
  @Input() selected?: Observable<boolean> | null;
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  Click() {
    this.onClick.emit();
  }

}
