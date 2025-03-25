import { Component, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CombatSpell, DetectionSpell, Spell, SpellType } from 'src/app/core/models/spell.model';

@Component({
  selector: 'app-spell-type-selector',
  templateUrl: './spell-type-selector.component.html',
  styleUrls: ['./spell-type-selector.component.scss']
})
export class SpellTypeSelectorComponent {
  @Input() spell!:Spell;
  @Output() spellChange:EventEmitter<Spell> = new EventEmitter();
  @ViewChild('btn') btnElement!: ElementRef;
  isOpen:boolean = false;

  toggle() {
    console.log(this.btnElement);
    this.isOpen = !this.isOpen;
  }

  changeType(type:SpellType){
    this.spell = this.to(type);
    this.spellChange.emit(this.spell);
    console.log("Has changed type");
    console.log(this.spell.constructor.name);
  }

  to(type:SpellType) {
    switch(type) {
      case "combat" : return new CombatSpell(this.spell);
      case "detection" : return new DetectionSpell(this.spell);
      default : return this.spell;
    }
  }

}
