import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  couleurAleatoire="";
  user: any;
  name = ""
  prenon = ""
  nom = ""
  email = ""

  ngOnInit() {
    const user = localStorage.getItem('user');
    const color = localStorage.getItem('couleurAleatoire');
    if (color) {
      this.couleurAleatoire = color;
    }
    if (user) {
      this.user = JSON.parse(user);
      this.name = this.user.login + ' ' + this.user.nom;
      this.nom = this.user.nom;
      this.prenon = this.user.login;
      this.email = this.user.email;
    }
  }
}
