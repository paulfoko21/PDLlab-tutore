import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private apiUrl = 'https://gestion-bibliotheques.onrender.com';

  constructor(private http: HttpClient) {}
  getallcategorie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gestionBiliotheques/v1.O/categories/all`)
  }
  addcategorie(category: Categorie): Observable<any> {
    return this.http.post(`${this.apiUrl}/gestionBiliotheques/v1.O/categories/create`, category)
  }
}
