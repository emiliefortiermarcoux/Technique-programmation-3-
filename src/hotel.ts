export interface Hotel{
    id: number;
    nomhotel: string;
    coordonneeshotel: string;
    nombreetoileshotel: number;
    nombrechambreshotel: number;
    caracteristiqueshotel: {
        faceplage: boolean;
        proximiteparc: boolean;
        ascenseur: boolean;
        miniclub: boolean;
        mariages: boolean;
        plage: boolean;
    }
}