import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncounterCreatorPageComponent } from './features/encounter/pages/encounter-creator-page/encounter-creator-page.component';
import { EncounterViewerPageComponent } from './features/encounter/pages/encounter-viewer-page/encounter-viewer-page.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { CreateTemplatePageComponent } from './features/template/pages/create-template-page/create-template-page.component';
import { TemplateOverviewPageComponent } from './features/template/pages/template-overview-page/template-overview-page.component';

const routes: Routes = [{
  path:"",
  component:HomePageComponent,
  children: [
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
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
