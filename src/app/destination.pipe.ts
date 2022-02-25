import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from '../forfait';

@Pipe({
  name: 'destination'
})
export class DestinationPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter( p => p.destination);
  }

}
