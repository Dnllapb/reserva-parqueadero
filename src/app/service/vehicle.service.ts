import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Vehicle } from '../vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private baseUrl ="http://localhost:15432/api/v1/vehicle/newVehicle"
  private baseUrl2 ="http://localhost:15432/api/v1/vehicle/getVehicle"
  private baseUrl3 ="http://localhost:15432/api/v1/vehicle/updateVehicle"
  private baseUrl4 ="http://localhost:15432/api/v1/vehicle/search"
 private baseUrl5 ="http://localhost:15432/api/v1/vehicle/delete"
 
  constructor( private httpClient:HttpClient) { }

  newVehicle(vehicle: Vehicle): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, vehicle).pipe(
      tap(() => {
        
        // Mostrar una alerta de éxito cuando se crea el vehículo
        alert('Vehículo creado exitosamente');
      }),
      catchError(error => {
        // Manejar el error aquí, por ejemplo, mostrando una alerta o mensaje al usuario
        alert('Ocurrió un error al crear el vehículo');
        // Re-lanzar el error para que también pueda ser manejado por cualquier suscriptor
        return throwError(() => new Error('Ocurrió un error al crear el vehículo'));
      })
    );
  }


   findAllVehicle() :Observable<Vehicle[]>{
    return this.httpClient.get<Vehicle[]>(`${this.baseUrl2}`)
  }
  updateVehicle(id: number, usuario: Vehicle): Observable<object> {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,usuario);
  }
  
  getVehicleById(id: number): Observable<Vehicle> {
    return this.httpClient.get<Vehicle>(`${this.baseUrl4}/${id}`);
  }

  deleteVehicle(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }
   
}

