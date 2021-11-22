import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../../forfait'


@Component({
  selector: 'app-etoiles',
  templateUrl: './etoiles.component.html',
  styleUrls: ['./etoiles.component.css']
})
export class EtoilesComponent implements OnInit {
  @Input() forfait: Forfait;
  constructor() { }

  ngOnInit(): void {
  }

}
