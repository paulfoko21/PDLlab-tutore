import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { SavePhotoParams } from '../../Dashboard/models/dataRequest';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public reqisLoading = false;
  constructor(private http: HttpClient) { }
  setphoto(data : SavePhotoParams, headers: HttpHeaders): Observable <any>{
    const form : FormData = new FormData();
    console.log(data.file)
    if (data.file) {
      form.append('file', data.file as string | Blob);
    }
    console.log(form);
    this.reqisLoading = true;
    return this.http.post(`https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/photos/save/${data.id}/${data.title}/${data.context}`, form, {headers})
    .pipe(
      finalize(() => this.reqisLoading = false)
    );
  }
}
