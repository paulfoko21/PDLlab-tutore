import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fixed-nav',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './fixed-nav.component.html',
  styleUrl: './fixed-nav.component.scss'
})
export class FixedNavComponent {

}
