import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { TableauForfaitsComponent } from './tableau-forfaits/tableau-forfaits.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ForfaitXComponent } from './forfait-x/forfait-x.component';
import { ForfaitYComponent } from './forfait-y/forfait-y.component';
import { FormulaireDeGestionDesForfaitsComponent } from './formulaire-de-gestion-des-forfaits/formulaire-de-gestion-des-forfaits.component';

const routes: Routes = [
  { path: '', component:AccueilComponent },
  { path:'tableau-forfaits', component:TableauForfaitsComponent },
  { path: 'liste-forfaits', component:ListeForfaitsComponent },
  { path: 'forfaitx', component:ForfaitXComponent },
  { path: 'forfaity', component:ForfaitYComponent },
  { path: 'admin', component:FormulaireDeGestionDesForfaitsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
