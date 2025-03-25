import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {
  @Input() btn! : ElementRef;
  @Input() isOpen : boolean = false;
  @Input() backgroundColor ?: string;
  @Output() isOpenChange : EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('wrapper') wrapper!: ElementRef;

  constructor (private rendere:Renderer2) {
    this.rendere.listen("window",'click',(e)=> {     
      if(this.isOpen && this.clickedOutside(e)){
        this.close();
      }
    });
  }

  clickedOutside(e:any) {
    return e.target !== this.wrapper.nativeElement 
        && e.target !== this.btn.nativeElement
        && !this.btn.nativeElement.contains(e.target);
  }


  close() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
