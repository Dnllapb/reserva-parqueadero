// reservations.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private apiUrl = 'URL_DEL_BACKEND'; // URL DE MI BACKEND

  constructor(private http: HttpClient) {}

  createReservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/reservations`, data);
  }

  obtenerReservas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/reservas`);
  }

  // Otros métodos relacionados con reservas
}
