import { Component, Input } from '@angular/core';
import { CombatSpell } from 'src/app/core/models/spell.model';

@Component({
  selector: 'app-combat-spell-editor',
  templateUrl: './combat-spell-editor.component.html',
  styleUrls: ['./combat-spell-editor.component.scss']
})
export class CombatSpellEditorComponent {
  @Input() spell!:CombatSpell ;

}
