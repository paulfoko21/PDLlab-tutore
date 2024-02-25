import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  menuvisible: number = 1

  constructor(private router: Router){}
  togglemenu(id:number){
    if (this.menuvisible == id) {
      this.menuvisible = 0
    } else {
      this.menuvisible = id
    }
  }
  isActive(url:string):boolean{
    return this.router.isActive(url, true);
  }
}
