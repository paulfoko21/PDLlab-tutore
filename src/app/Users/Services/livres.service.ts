import { Injectable } from '@angular/core';

export interface Livre {
  titre: string;
  auteur: string;
  imageSrc: string;
}

@Injectable({
  providedIn: 'root'
})
export class LivresService {
  
  constructor() { }

  getLivres(): any[] {

    return [
      { titre: 'Titre 1', auteur: 'Auteur 1', imageSrc: 'assets/images/livres/livre1.png' },
      { titre: 'Titre 2', auteur: 'Auteur 2', imageSrc: 'assets/images/livres/livre2.png' },
      { titre: 'Titre 3', auteur: 'Auteur 3', imageSrc: 'assets/images/livres/livre3.png' },
      { titre: 'Titre 1', auteur: 'Auteur 1', imageSrc: 'assets/images/livres/livre1.png' },
      { titre: 'Titre 2', auteur: 'Auteur 2', imageSrc: 'assets/images/livres/livre2.png' },
      { titre: 'Titre 3', auteur: 'Auteur 3', imageSrc: 'assets/images/livres/livre3.png' },
      { titre: 'Titre 1', auteur: 'Auteur 1', imageSrc: 'assets/images/livres/livre1.png' },
      { titre: 'Titre 2', auteur: 'Auteur 2', imageSrc: 'assets/images/livres/livre2.png' },
      { titre: 'Titre 3', auteur: 'Auteur 3', imageSrc: 'assets/images/livres/livre3.png' }
    ];
  }
}
