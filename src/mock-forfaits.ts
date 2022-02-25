import { parseSelectorToR3Selector } from '@angular/compiler/src/core'
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing'
import { Forfait } from './forfait'

export const FORFAITS : Forfait [] = [
    {
    id: 1 ,
    destination: 'Bali',
    villeDepart: 'Boston',
    hotel: {
        id: 1,
        nom: 'Baba',
        coordonnees: '1 rue curcuma',
        nombreEtoiles: 3,
        nombreChambres: 120,
        caracteristiques: 'face plage, ascenceur, miniclub, mariages',
        image:'https://media-cdn.tripadvisor.com/media/photo-s/18/a8/02/f4/anantara-uluwatu-bali.jpg'
    },
    dateDepart: '3 janvier 2022',
    dateRetour: '10 janvier 2022',
    prix: 3000,
    rabais:200,
    vedette:true,
    },

    {
        id: 2,
        destination: 'New York',
        villeDepart: 'Montreal',
        hotel: {
            id: 2,
            nom: 'NYC',
            coordonnees: '3 wallstreet',
            nombreEtoiles: 4.5 ,
            nombreChambres: 75,
            caracteristiques: 'parc, ascenceur, mariages',
            image:'https://images.rosewoodhotels.com/is/image/rwhg/hi-h0hlp-119636520-aeriel-shot-justin-bare-2:TALL-LARGE-9-16'
        },
        dateDepart: '10 fevrier 2022',
        dateRetour: '14 fevrier 2022',
        prix: 350,
        vedette:false,
        },

        {
            id: 3 ,
            destination: 'Colombie-Britannique',
            villeDepart: 'Montreal',
            hotel: {
                id: 3,
                nom: 'White rocks hotel',
                coordonnees: '25 rocky mountains',
                nombreEtoiles: 5,
                nombreChambres: 25,
                caracteristiques: 'face plage, parc, ascenseur, miniclub, mariages',
                image: 'https://ih0.redbubble.net/image.6381487.8654/flat,1000x1000,075,f.jpg'

            },
            dateDepart: '3 mars 2022',
            dateRetour: '13 mars 2022',
            prix: 1500,
            vedette: false,
            },
            {
                id: 4 ,
                destination: 'Cuba',
                villeDepart: 'Montreal',
                hotel: {
                    id: 4,
                    nom: 'Cuba star',
                    coordonnees: '4545 hablano',
                    nombreEtoiles: 3,
                    nombreChambres: 30,
                    caracteristiques: 'face plage, parc, ascenseur, miniclub',
                    image: 'https://ih0.redbubble.net/image.6381487.8654/flat,1000x1000,075,f.jpg'
    
                },
                dateDepart: '5 fevrier 2023',
                dateRetour: '12 fevrier 2023',
                prix: 800,
                vedette: true,
                },
                {
                    id: 5 ,
                    destination: 'Punta Cana',
                    villeDepart: 'Montreal',
                    hotel: {
                        id: 5,
                        nom: 'Grand Bahia Principe',
                        coordonnees: '845 Republica',
                        nombreEtoiles: 5,
                        nombreChambres: 100,
                        caracteristiques: 'face plage, parc, ascenseur, miniclub, plage',
                        image: 'https://ih0.redbubble.net/image.6381487.8654/flat,1000x1000,075,f.jpg'
        
                    },
                    dateDepart: '5 fevrier 2023',
                    dateRetour: '12 fevrier 2023',
                    prix: 2500,
                    vedette: false,
                    },
                    {
                        id: 6 ,
                        destination: 'Cuba',
                        villeDepart: 'Montreal',
                        hotel: {
                            id: 6,
                            nom: 'Cubain',
                            coordonnees: '1500 Cubababa',
                            nombreEtoiles: 3,
                            nombreChambres: 50,
                            caracteristiques: 'face plage, plage',
                            image: 'https://ih0.redbubble.net/image.6381487.8654/flat,1000x1000,075,f.jpg'
            
                        },
                        dateDepart: '5 fevrier 2023',
                        dateRetour: '12 fevrier 2023',
                        prix: 100,
                        vedette: false,
                        },
    
    
]