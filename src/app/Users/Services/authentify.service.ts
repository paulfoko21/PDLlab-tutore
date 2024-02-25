import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
// import { LoginForm } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentifyService {
  private readonly couleurs: string[] = ['#FF5C00', '#5075ff', '#a200ff', '#3399ff', '#0a75ad', '#990000'];
  private accessTokenKey = 'access_token';
  private apiUrl = 'https://gestion-bibliotheques.onrender.com';

  constructor(private http: HttpClient) {}
  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/gestionBiliotheques/v1.O/authentication/authenticate`, data).pipe(
      tap((response: any) => {
        const accessToken = response.accessToken;
        this.getcolor();
        this.setAccessToken(accessToken);
      }),switchMap((response) => {
        return this.http.get(`${this.apiUrl}/gestionBiliotheques/v1.O/utilisateur/byEmail/${data.login}`);
      })
    );
  }
  getAutorisation() :any{
    const t = localStorage.getItem(this.accessTokenKey);
    if (t !== null) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${t}`
      });
    }else {
      console.log("Vous n'êtes pas connecté !");
      return new HttpHeaders(); // Retourne des en-têtes vides si l'utilisateur n'est pas connecté
    }
  }
  getcolor() :void{
    const color = this.couleurs[Math.floor(Math.random() * this.couleurs.length)];
    localStorage.setItem('couleurAleatoire', color);
  }
  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  clearAccessToken(): void {
    localStorage.removeItem(this.accessTokenKey);
  }
}