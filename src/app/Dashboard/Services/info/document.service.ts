import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor(private http: HttpClient) { }

  getAllDocuments(){
    return this.http.get('https://gestion-bibliotheques.onrender.com//gestionBiliotheques/v1.O/ouvrages/all')
  }

  getDocumentById(id: number){
    return this.http.get(`https://gestion-bibliotheques.onrender.com//gestionBiliotheques/v1.O/ouvrages/${id}`)
  }
  updateDocumentById(id: number, document: Document){
    return this.http.put(`https://gestion-bibliotheques.onrender.com//gestionBiliotheques/v1.O/ouvrages/${id}`, document)
  }
}
