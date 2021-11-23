import { parseSelectorToR3Selector } from '@angular/compiler/src/core'
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'
import { Forfait } from './forfait'

export const FORFAITS : Forfait [] = [
    {
    id: 1 ,
    destination: 'Bali',
    villedepart: 'Boston',
    hotel: {
        id: 1,
        nomhotel: 'Baba',
        coordonneeshotel: '1 rue curcuma',
        nombreetoileshotel: 3,
        nombrechambreshotel: 120,
        caracteristiqueshotel: 'face plage, ascenceur, miniclub, mariages, plage',
        image:'https://media-cdn.tripadvisor.com/media/photo-s/18/a8/02/f4/anantara-uluwatu-bali.jpg'
    },
    datededepart: '3 janvier 2022',
    datederetour: '10 janvier 2022',
    prix: 3000,
    rabais:200,
    vedette:true,
    },

    {
        id: 2,
        destination: 'New York',
        villedepart: 'Montreal',
        hotel: {
            id: 2,
            nomhotel: 'NYC',
            coordonneeshotel: '3 wallstreet',
            nombreetoileshotel: 4.5 ,
            nombrechambreshotel: 75,
            caracteristiqueshotel: 'parc, ascenceur, mariages',
            image:'https://images.rosewoodhotels.com/is/image/rwhg/hi-h0hlp-119636520-aeriel-shot-justin-bare-2:TALL-LARGE-9-16'
        },
        datededepart: '10 fevrier 2022',
        datederetour: '14 fevrier 2022',
        prix: 350,
        vedette:false,
        },

        {
            id: 3 ,
            destination: 'Colombie-Britannique',
            villedepart: 'Montreal',
            hotel: {
                id: 3,
                nomhotel: 'White rocks hotel',
                coordonneeshotel: '25 rocky mountains',
                nombreetoileshotel: 5,
                nombrechambreshotel: 25,
                caracteristiqueshotel: 'face plage, parc, ascenseur, miniclub, mariages, plage',
                image: 'https://ih0.redbubble.net/image.6381487.8654/flat,1000x1000,075,f.jpg'

            },
            datededepart: '3 mars 2022',
            datederetour: '13 mars 2022',
            prix: 1500,
            vedette: false,
            },

    
    
    
]