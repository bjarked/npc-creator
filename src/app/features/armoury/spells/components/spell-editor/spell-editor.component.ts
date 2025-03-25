import { Component, Input } from '@angular/core';
import { CombatSpell, DetectionSpell, Spell } from 'src/app/core/models/spell.model';

@Component({
  selector: 'app-spell-editor',
  templateUrl: './spell-editor.component.html',
  styleUrls: ['./spell-editor.component.scss']
})
export class SpellEditorComponent<T extends Spell>  {
  @Input() spell!:T ;
}
