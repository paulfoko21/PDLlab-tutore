import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { MatIconModule } from '@angular/material/icon';
import { FixedNavComponent } from '../../components/fixed-nav/fixed-nav.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, 
    NavbarComponent, 
    FixedNavComponent, 
    FooterComponent, 
    HttpClientModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
