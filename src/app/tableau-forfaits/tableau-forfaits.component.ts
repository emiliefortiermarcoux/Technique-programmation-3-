import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { NgForm } from '@angular/forms';

import { Forfait } from '../../forfait';
import { VoyageServiceService } from '../voyage-service.service';

@Component({
  selector: 'app-tableau-forfaits',
  templateUrl: './tableau-forfaits.component.html',
  styleUrls: ['./tableau-forfaits.component.css']
})
export class TableauForfaitsComponent implements OnInit {
  columnsToDisplay = ['nom']
  forfait:Forfait[] = [];
  newForfait: Forfait[]= [];
  selectedForfait?: Forfait;


  @Output() majTableau = new EventEmitter();
  this.voyageServiceService.addForfait(this.forfait).subscribe(_ => { this.majTableau.emit() });
      

  constructor() { }

  ngOnInit(){
    this.newForfait.nom = "";
    this.getForfaits();
  }
  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if(forfaitFormAjout.valid) {
      this.forfaitServiceService.addForfait(this.newForfait)
          .subscribe(forfait  => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
}
    onSelect(forfait: Forfait): void {
      this.selectedForfait = forfait; 
    }

    onEdit(forfaitFormEdition: NgForm): void {
      if (forfaitFormEdition.valid) {
        this.forfaitService.updateForfait(this.selectedForfait)
            .subscribe(() => this.selectedForfait = null);
      }
    };
    
    onDelete(forfait: Forfait): void {
      this.voyageServiceService.deleteForfait(forfait._id)
          .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfait));
    }
    onSelect(forfait: Forfait) { this.selectedForfait =forfait;  }}
;
}


