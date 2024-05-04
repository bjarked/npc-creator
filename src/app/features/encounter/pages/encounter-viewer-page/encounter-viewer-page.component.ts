import { Component } from '@angular/core';
import { Encounter } from 'src/app/core/models/ecounter.model';
import { EncounterService } from 'src/app/core/services/encounter.service';

@Component({
  selector: 'app-encounter-viewer-page',
  templateUrl: './encounter-viewer-page.component.html',
  styleUrls: ['./encounter-viewer-page.component.css']
})
export class EncounterViewerPageComponent {
  selected?:Encounter;
constructor(public EncounterService:EncounterService){

}
  select (enc:Encounter) {
    this.selected = enc;
  }
}
