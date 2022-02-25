import { Component, OnInit } from '@angular/core';
import { Forfait } from '../../forfait';
import { VoyageServiceService } from '../voyage-service.service';

@Component({
  selector: 'app-formulaire-de-gestion-des-forfaits',
  templateUrl: './formulaire-de-gestion-des-forfaits.component.html',
  styleUrls: ['./formulaire-de-gestion-des-forfaits.component.css']
})
export class FormulaireDeGestionDesForfaitsComponent implements OnInit {
  forfaits: Forfait[] = [];
  selectedForfait?: Forfait;
  columsToDisplay = ['nom', 'prix']

  constructor(private voyageServiceService: VoyageServiceService) { }

  ngOnInit(): void { this.getForfaits();  }

  getForfaits(): void { this.voyageServiceService.getForfaits().subscribe(resultat => this.forfaits = resultat);  }

  onDelete(forfait: Forfait): void { this.voyageServiceService.deleteForfait(forfait.id).subscribe(result => 
this.forfaits = this.forfaits.filter(f => f !== forfait));
  }

  onSelect(forfait: Forfait) { this.selectedForfait = forfait;  }}
