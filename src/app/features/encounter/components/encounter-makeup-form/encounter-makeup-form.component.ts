import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FactionMakeUp } from 'src/app/core/models/ecounter.model';

@Component({
  selector: 'app-encounter-makeup-form',
  templateUrl: './encounter-makeup-form.component.html',
  styleUrls: ['./encounter-makeup-form.component.css']
})
export class EncounterMakeupFormComponent {
  @Input() makeup:FactionMakeUp = new FactionMakeUp();
  @Input() value:string = "";
  @Output() makeupChange:EventEmitter<FactionMakeUp>= new EventEmitter<FactionMakeUp>();

  public updateValue (event: Event,name:string) {
    const input = event.target as HTMLInputElement;
    const race = this.makeup.makeup.find(r => r.race.name == name);
    if (race) race.factor = Number(input.value);
    this.makeupChange.emit(this.makeup);
  }

}
