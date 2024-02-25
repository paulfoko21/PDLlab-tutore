import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLivreComponent } from '../card-livre/card-livre.component';
import { LivresService, Livre } from '../../Services/livres.service';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-section-prod',
  standalone: true,
  imports: [CommonModule, CardLivreComponent, MatTabsModule],
  templateUrl: './section-prod.component.html',
  styleUrl: './section-prod.component.scss'
})
export class SectionProdComponent {
  Livres: Livre[]= [];

  constructor(private livresService: LivresService) {}

  ngOnInit() {
    this.Livres = this.livresService.getLivres();
  }
}
