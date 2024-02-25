import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivresService, Livre } from '../../Services/livres.service';
import { CardLivreComponent } from '../card-livre/card-livre.component';

@Component({
  selector: 'app-descrip-livres',
  standalone: true,
  imports: [CommonModule,  CardLivreComponent],
  templateUrl: './descrip-livres.component.html',
  styleUrl: './descrip-livres.component.scss'
})
export class DescripLivresComponent {
  Livres: Livre[]= [];

  constructor(private livresService: LivresService) {}

  ngOnInit() {
    this.Livres = this.livresService.getLivres();
  }
}
