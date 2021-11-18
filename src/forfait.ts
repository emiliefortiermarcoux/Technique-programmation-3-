import {Hotel} from './hotel'

export interface Forfait {
    id: number;
    destination: string;
    villedepart: string;
    hotel: Hotel;
    datededepart: string;
    datederetour: string;
    prix: number;
}

