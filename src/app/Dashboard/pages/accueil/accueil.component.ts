import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardheadComponent } from "../../components/cardhead/cardhead.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, CardheadComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
