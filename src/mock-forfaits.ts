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
        caracteristiqueshotel: {
            faceplage: true,
            proximiteparc: false,
            ascenseur: true,
            miniclub: true,
            mariages: true,
            plage: true,
        },
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
            caracteristiqueshotel: {
                faceplage: false,
                proximiteparc: true,
                ascenseur: true,
                miniclub: false,
                mariages: true,
                plage: false,
            },
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
                caracteristiqueshotel: {
                    faceplage: true,
                    proximiteparc: true,
                    ascenseur: true,
                    miniclub: true,
                    mariages: true,
                    plage: true,
                },
            },
            datededepart: '3 mars 2022',
            datederetour: '13 mars 2022',
            prix: 1500,
            vedette: false,
            },

    
    
    
]