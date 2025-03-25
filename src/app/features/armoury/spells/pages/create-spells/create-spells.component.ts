import { Component } from '@angular/core';
import { Spell } from 'src/app/core/models/spell.model';

@Component({
  selector: 'app-create-spells',
  templateUrl: './create-spells.component.html',
  styleUrls: ['./create-spells.component.scss']
})
export class CreateSpellsComponent {
  spell:Spell = new Spell();
}
