import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripLivresComponent } from '../../components/descrip-livres/descrip-livres.component';

@Component({
  selector: 'app-view-livre',
  standalone: true,
  imports: [CommonModule, DescripLivresComponent],
  templateUrl: './view-livre.component.html',
  styleUrl: './view-livre.component.scss'
})
export class ViewLivreComponent {

}
