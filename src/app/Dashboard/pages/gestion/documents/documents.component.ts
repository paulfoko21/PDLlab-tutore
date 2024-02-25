import { CategorieService } from './../../../Services/ges/categorie.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FormDocumentComponent } from '../../../components/form-document/form-document.component';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, MatTabsModule, FormDocumentComponent],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss'
})
export class DocumentsComponent {
  handleform = false

  opencard(){
    this.handleform = !this.handleform
  }
}
