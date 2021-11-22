import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireDeGestionDesForfaitsComponent } from './formulaire-de-gestion-des-forfaits/formulaire-de-gestion-des-forfaits.component';
import { FormulaireDeRechercheComponent } from './formulaire-de-recherche/formulaire-de-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    ForfaitMiniComponent,
    EtoilesComponent,
    FormulaireDeGestionDesForfaitsComponent,
    FormulaireDeRechercheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
