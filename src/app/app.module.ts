import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InformationComponent } from './content/information/information.component';
import { DossierComponent } from './content/dossier/dossier.component';
import { SkillsComponent } from './content/skills/skills.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarComponent,
    InformationComponent,
    DossierComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
