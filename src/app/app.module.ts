import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { CharacteristicsFormComponent } from './shared/components/characteristics-form/characteristics-form.component';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './shared/components/field/field.component';
import { FieldLimitsComponent } from './shared/components/field-limits/field-limits.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FieldArrayComponent } from './shared/components/field-array/field-array.component';
import { ButtonSmallComponent } from './shared/components/button-small/button-small.component';
import { environment } from '../environments/environment';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { REGION } from '@angular/fire/compat/functions';
import { CreateTemplatePageComponent } from './features/template/pages/create-template-page/create-template-page.component';
import { TemplateOverviewPageComponent } from './features/template/pages/template-overview-page/template-overview-page.component';
import { EncounterViewerPageComponent } from './features/encounter/pages/encounter-viewer-page/encounter-viewer-page.component';
import { EncounterCreatorPageComponent } from './features/encounter/pages/encounter-creator-page/encounter-creator-page.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ButtonHeaderComponent } from './shared/components/button-header/button-header.component';
import { NpcCreateFormComponent } from './features/template/components/npc-create-form/npc-create-form.component';
import { NpcViewerComponent } from './features/template/components/npc-viewer/npc-viewer.component';
import { FieldAreaComponent } from './shared/components/field-area/field-area.component';
import { LoadingScreenComponent } from './core/components/loading-screen/loading-screen.component';
import { MultiSelectorComponent } from './shared/components/multi-selector/multi-selector.component';
import { EncounterNpcsPipe } from './features/encounter/pipes/encounter-npcs.pipe';
import { RightSidebarComponent } from './shared/components/layout/right-sidebar/right-sidebar.component';
import { PageComponent } from './shared/components/layout/page/page.component';
import { ContentComponent } from './shared/components/layout/content/content.component';
import { LeftSidebarComponent } from './shared/components/layout/left-sidebar/left-sidebar.component';
import { IsClassPipe } from './shared/pipes/is-class.pipe';
import { EncounterMakeupFormComponent } from './features/encounter/components/encounter-makeup-form/encounter-makeup-form.component';
import { FieldCheckmarkComponent } from './shared/components/field-checkmark/field-checkmark.component';
import { ExistsPipe } from './shared/pipes/exists.pipe';
import { SplitPipe } from './shared/pipes/split.pipe';
import { TagSelectorComponent } from './shared/components/tag-selector/tag-selector.component';
import { SettingIconComponent } from './shared/assets/icons/setting-icon/setting-icon.component';
import { DropdownMenuComponent } from './shared/components/dropdown-menu/dropdown-menu.component';
import { EncoutnerToolboxComponent } from './features/encounter/components/encounter-search-selector/encounter-search-selector.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { NonEmptyPipe } from './shared/pipes/non-empty.pipe';
import { StatusBoxComponent } from './features/encounter/components/status-box/status-box.component';
import { OrderbyPipe } from './shared/pipes/orderby.pipe';
import { RepeatPipe } from './shared/pipes/repeat.pipe';
import { ConditionMonitorComponent } from './features/encounter/components/condition-monitor/condition-monitor.component';
import { SpeedBotsComponent } from './shared/assets/icons/speed-bots/speed-bots.component';
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';
import { EqualPipe } from './shared/pipes/equal.pipe';
import { ToolboxComponent } from './shared/components/layout/toolbox/toolbox.component';
import { ButtonHeaderDropdownComponent } from './shared/components/button-header-dropdown/button-header-dropdown.component';
import { CreateSpellsComponent } from './features/armoury/spells/pages/create-spells/create-spells.component';
import { SpellEditorComponent } from './features/armoury/spells/components/spell-editor/spell-editor.component';
import { SpellTypeSelectorComponent } from './features/armoury/spells/components/spell-type-selector/spell-type-selector.component';
import { CombatSpellEditorComponent } from './features/armoury/spells/components/spell-editor/combat-spell-editor/combat-spell-editor.component';
import { DetectionSpellEditorComponent } from './features/armoury/spells/components/spell-editor/detection-spell-editor/detection-spell-editor.component';
import { RulesEditorComponent } from './features/rules/pages/rules-editor/rules-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { QuickMenuComponent } from './shared/components/layout/quick-menu/quick-menu.component';

// External
import { AngularEditorModule } from '@kolkov/angular-editor';
import { RuleQuickMenuComponent } from './features/rules/components/rule-quick-menu/rule-quick-menu.component';
import { LeftArrowComponent } from './shared/assets/icons/left-arrow/left-arrow.component';

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
    ButtonSmallComponent,
    CreateTemplatePageComponent,
    TemplateOverviewPageComponent,
    EncounterViewerPageComponent,
    EncounterCreatorPageComponent,
    HeaderComponent,
    ButtonHeaderComponent,
    NpcViewerComponent,
    FieldAreaComponent,
    LoadingScreenComponent,
    MultiSelectorComponent,
    EncounterNpcsPipe,
    RightSidebarComponent,
    PageComponent,
    ContentComponent,
    LeftSidebarComponent,
    IsClassPipe,
    EncounterMakeupFormComponent,
    FieldCheckmarkComponent,
    ExistsPipe,
    SplitPipe,
    TagSelectorComponent,
    SettingIconComponent,
    DropdownMenuComponent,
    EncoutnerToolboxComponent,
    FilterPipe,
    NonEmptyPipe,
    StatusBoxComponent,
    OrderbyPipe,
    RepeatPipe,
    ConditionMonitorComponent,
    SpeedBotsComponent,
    IconButtonComponent,
    EqualPipe,
    ToolboxComponent,
    ButtonHeaderDropdownComponent,
    CreateSpellsComponent,
    SpellEditorComponent,
    SpellTypeSelectorComponent,
    CombatSpellEditorComponent,
    DetectionSpellEditorComponent,
    RulesEditorComponent,
    QuickMenuComponent,
    RuleQuickMenuComponent,
    LeftArrowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularEditorModule,
    HttpClientModule
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase },{ provide: REGION, useValue: 'europe-west1' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
