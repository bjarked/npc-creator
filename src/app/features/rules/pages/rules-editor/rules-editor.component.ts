import { Component } from '@angular/core';
import { RulesService } from '../../../../core/services/rules.service';
import { Rules, RuleSection } from 'src/app/core/models/rules.model';

@Component({
  selector: 'app-rules-editor',
  templateUrl: './rules-editor.component.html',
  styleUrls: ['./rules-editor.component.scss']
})
export class RulesEditorComponent {
  public selected: Rules | null  = null;

  constructor(public rulesService:RulesService) {
    rulesService.rules$.subscribe(rules => {
      console.log(rules)
    })
  }
  select (battleNpc:Rules) {
    this.selected = battleNpc;
  }

  public change(event:any) {
    console.log("change");
    console.log(event);
  }
  public save(rule:Rules) {
    this.rulesService.SaveRule(rule);
  }
  public addSection() {
    this.selected?.sections.push({name:"new section",html:""})
  }
  public removeSection(index:number) {
    if (this.selected == null) return;
    this.selected.sections = this.selected.sections.filter((v,i)=> i != index);
  }
  public delete (rule:Rules) {
    this.rulesService.DeleteRule(rule);
    if (rule.id == this.selected?.id){
      this.selected = null;
    }
  }
  public newRule() {
    this.selected = {
      name:"new rule",
      sections:[]
    };
  }
}
