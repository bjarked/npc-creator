import { Component, ElementRef, ViewChild } from '@angular/core';
import { Rules } from 'src/app/core/models/rules.model';
import { RulesService } from 'src/app/core/services/rules.service';

@Component({
  selector: 'app-rule-quick-menu',
  templateUrl: './rule-quick-menu.component.html',
  styleUrls: ['./rule-quick-menu.component.scss']
})
export class RuleQuickMenuComponent {
  public selected: Rules | null = null;
  @ViewChild('contentdiv') content!:ElementRef;

  constructor(public rulesService:RulesService){

  }

  public select(r:Rules) {
    this.selected = r;
    console.log(this.content)
    this.content.nativeElement.innerHTML = r.sections.reduce((text,section) => text + "<div class='section'><h2>"+ section.name + "</h2>"+ section.html + "</div>", "")
  }

}
