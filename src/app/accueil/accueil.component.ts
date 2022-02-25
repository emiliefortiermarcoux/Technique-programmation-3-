import { Component, OnInit } from '@angular/core';
import { Forfait } from '../../forfait';
import { VoyageServiceService } from '../voyage-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  forfaits: Forfait[] = [];
  
  constructor(private voyageServiceService: VoyageServiceService) { }

  ngOnInit(): void {
    this.getForfaits();
  }

  getForfaits(): void {
    this.voyageServiceService.getForfaits()
        .subscribe(resultat => this.forfaits = resultat);
  }

}
