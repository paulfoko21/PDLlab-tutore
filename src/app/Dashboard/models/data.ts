export interface Document {
    auteur: string,
    categorie: Categorie;
    description: string,
    disponible: true,
    fichier: string,
    genre: string,
    nature: string,
    nom: string,
    photo: string,
    prixUnitaire: number,
    type: string
}

export interface Categorie {
    code: string,
    description: string,
    id: 0,
    nom: string,
    photo: string
}