import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { NpcCreateFormComponent } from './features/home/components/npc-create-form/npc-create-form.component';
import { CharacteristicsFormComponent } from './features/home/components/characteristics-form/characteristics-form.component';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './shared/components/field/field.component';
import { FieldLimitsComponent } from './shared/components/field-limits/field-limits.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FieldArrayComponent } from './shared/components/field-array/field-array.component';
import { ButtonSmallComponent } from './shared/components/button-small/button-small.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NpcCreateFormComponent,
    CharacteristicsFormComponent,
    FieldComponent,
    FieldLimitsComponent,
    ButtonComponent,
    FieldArrayComponent,
    ButtonSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
