import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  saludar(nombre: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(`http://${environment.host}:8080/demo/hello?name=${nombre}`, { headers }).pipe(
    map(resp => {
        return resp;
      }),
    );
  }
}
