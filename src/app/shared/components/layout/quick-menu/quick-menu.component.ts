import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.scss']
})
export class QuickMenuComponent {
  isOpen:boolean = true;

  toggle() {
    console.log("Toogle");
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
