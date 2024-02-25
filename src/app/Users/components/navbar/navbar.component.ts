import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from  '@angular/material/badge' ;
import { ActionClickService } from '../../Services/action-click.service';
import { Router, RouterLink } from '@angular/router';
import { ProfilComponent } from "../profil/profil.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    imports: [
        CommonModule,
        MatIconModule,
        MatBadgeModule,
        RouterLink,
        ProfilComponent
    ]
})
export class NavbarComponent {
  couleurAleatoire: string="";
  handleprofile = false;
  user : any;

  ngOnInit() {
    const color = localStorage.getItem('couleurAleatoire');
    if (color) {
      this.couleurAleatoire = color;
    }
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }
  openprofil(){
    this.handleprofile = !this.handleprofile
  }
  constructor(private action: ActionClickService, private router: Router) {}
  login() {
    this.action.login();
  }

  isActive(url:string):boolean{
    return this.router.isActive(url, true);
  }
}
