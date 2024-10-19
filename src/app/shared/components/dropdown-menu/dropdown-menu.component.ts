import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  @Input() isOpen : boolean = false;
  @Input() backgroundColor ?: string;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>();

}
