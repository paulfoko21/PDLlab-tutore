import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AsideComponent } from "../../components/aside/aside.component";
import { NavComponent } from "../../components/nav/nav.component";

@Component({
    selector: 'app-admin-home',
    standalone: true,
    templateUrl: './admin-home.component.html',
    styleUrl: './admin-home.component.scss',
    imports: [CommonModule, RouterLink, RouterOutlet, AsideComponent, NavComponent]
})
export class AdminHomeComponent {
  isOpen = true;
  selectedItems: any[] = ['gestionnaire', 'historique'];
  navigationData: any[] = ['Dashboard', 'compte', 'gestionnaire', 'historique'];

  variants: any = {
    "in-view": { x: "0px", transition: { type: "tween", ease: "easeOut" } },
    "out-of-view": (index: number) => ({
      x: index > 0 ? "250px" : "-250px",
      transition: { type: "tween", ease: "easeOut" },
    }),
  };

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  goToNextLevel(item: any): void {
    if (!item.links) {
      return;
    }
    this.selectedItems = [...this.selectedItems, item.id];
  }

  goBack(): void {
    this.selectedItems.pop();
  }

  getNavItems(selectedItems: string[]): any[] {
    let result: any[] = [];
    let links: any[] = [...this.navigationData];
    let itr = 0;

    if (selectedItems.length === 0) {
      return this.navigationData;
    }

    while (itr < selectedItems.length) {
      let selectedLink: any;

      for (let i = 0; i < links.length; i++) {
        if (links[i].id === selectedItems[itr]) {
          selectedLink = links[i];

          if (selectedLink.links) {
            result = [...selectedLink.links];
          }
          break;
        }
      }
      links = [...result];
      itr++;
    }
    return result;
  }

  usercard: boolean = false;

  toggleusercard() {
    this.usercard = !this.usercard;
  }
}
