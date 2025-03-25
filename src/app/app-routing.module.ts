import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterCreatorPageComponent } from './features/encounter/pages/encounter-creator-page/encounter-creator-page.component';
import { EncounterViewerPageComponent } from './features/encounter/pages/encounter-viewer-page/encounter-viewer-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { CreateTemplatePageComponent } from './features/template/pages/create-template-page/create-template-page.component';
import { TemplateOverviewPageComponent } from './features/template/pages/template-overview-page/template-overview-page.component';
import { CreateSpellsComponent } from './features/armoury/spells/pages/create-spells/create-spells.component';
import { RulesEditorComponent } from './features/rules/pages/rules-editor/rules-editor.component';

const routes: Routes = [{
  path:"",
  component:HomePageComponent,
  children: [
    {
      path:"armoury",
      children: [
        {
          path:"spells",
          component:CreateSpellsComponent
        }
      ]
    },
    {
      path: "create-template",
      component:CreateTemplatePageComponent
    },
    {
      path: "template-overview",
      component:TemplateOverviewPageComponent
    },
    {
      path: "create-encouter",
      component:EncounterCreatorPageComponent
    },
    {
      path: "view-encouter",
      component:EncounterViewerPageComponent
    },
    {
      path: "rules",
      component:RulesEditorComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
