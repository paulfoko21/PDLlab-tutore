import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-livre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-livre.component.html',
  styleUrl: './card-livre.component.scss'
})
export class CardLivreComponent {
  @Input() titre: string ="";
  @Input() auteur: string = "";
  @Input() imageSrc: string ="";
  isHovered: boolean = false;

  constructor(private router: Router){}
  view(){
    this.router.navigate(['/View_detail']);
  }
}
