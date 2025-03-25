import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonHeaderComponent } from '../button-header/button-header.component';

@Component({
  selector: 'app-button-header-dropdown',
  templateUrl: './button-header-dropdown.component.html',
  styleUrls: ['./button-header-dropdown.component.scss','../button-header/button-header.component.scss']
})
export class ButtonHeaderDropdownComponent extends ButtonHeaderComponent {
  @ViewChild('btn') btnElement!: ElementRef;
  isOpen : boolean = false;
  override Click(): void {
    this.isOpen = !this.isOpen;
    console.log("Click");
    console.log(this.isOpen );
    super.Click();
  }
}
