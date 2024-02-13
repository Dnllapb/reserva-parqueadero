// fincas.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FincasService {
  private apiUrl = 'URL_DEL_BACKEND'; // URL DE MI BACKEND

  constructor(private http: HttpClient) {}

  obtenerFincas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/fincas`);
  }

  
}
