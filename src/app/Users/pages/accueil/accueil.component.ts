import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionProdComponent } from "../../components/section-prod/section-prod.component";
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
    selector: 'app-accueil',
    standalone: true,
    templateUrl: './accueil.component.html',
    styleUrl: './accueil.component.scss',
    imports: [CommonModule, SectionProdComponent, HeroComponent]
})
export class AccueilComponent {

}
