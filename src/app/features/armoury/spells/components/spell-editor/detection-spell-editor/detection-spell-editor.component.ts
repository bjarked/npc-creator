import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetectionSpell } from 'src/app/core/models/spell.model';

@Component({
  selector: 'app-detection-spell-editor',
  templateUrl: './detection-spell-editor.component.html',
  styleUrls: ['./detection-spell-editor.component.scss']
})
export class DetectionSpellEditorComponent {
  @Input() spell!:DetectionSpell ;
  @Output() spellChange:EventEmitter<DetectionSpell> = new EventEmitter();

}
