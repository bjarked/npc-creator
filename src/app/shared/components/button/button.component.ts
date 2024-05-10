import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text:string ="";
  @Input() type: "positiv" | "negativ" | "simple" ="positiv";
  @Input() selected:boolean = false;
  @Input() fullwidth:boolean = false;
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();


  constructor() { }

  ngOnInit(): void {
  }

  Click() {
    this.onClick.emit();
  }



}
