import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.css']
})
export class ButtonSmallComponent implements OnInit {
  @Input() text:string ="";
  @Input() backgroundColor:string = "green";
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  Click() {
    this.onClick.emit();
  }

}
