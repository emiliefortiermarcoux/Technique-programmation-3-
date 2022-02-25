import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http';
import { VoyageServiceService } from './voyage-service.service';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireDeGestionDesForfaitsComponent } from './formulaire-de-gestion-des-forfaits/formulaire-de-gestion-des-forfaits.component';
import { FormulaireDeRechercheComponent } from './formulaire-de-recherche/formulaire-de-recherche.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { DestinationPipe } from './destination.pipe';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AproposComponent } from './apropos/apropos.component';
import { NgChartsModule } from 'ng2-charts';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    ForfaitComponent,
    ForfaitMiniComponent,
    EtoilesComponent,
    FormulaireDeGestionDesForfaitsComponent,
    FormulaireDeRechercheComponent,
    TableauForfaitsComponent,
    DestinationPipe,
    FormulaireForfaitComponent,
    NavBarComponent,
    AproposComponent,
    ForfaitXComponent,
    ForfaitYComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    NgChartsModule,

  ],
  providers: [VoyageServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
