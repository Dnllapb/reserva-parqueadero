import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserve } from '../pages/Reserve/Reserve';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  constructor(private http: HttpClient) {}

  private baseUrl ="http://localhost:15432/api/v1/reserve/newReserve"
  private baseUrl2 ="http://localhost:15432/api/v1/reserve/getReserve"



  newReserve(reserve: Reserve): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, reserve);
  }

  getReserve(): Observable<Reserve[]> {
    return this.http.get<Reserve[]>(`${this.baseUrl2}`);
  }
}
