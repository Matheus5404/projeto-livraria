import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livraria } from './livraria';

@Injectable({
  providedIn: 'root'
})
export class LivrariaService {

  apiUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Livraria[]> {
    return this.http.get<Livraria[]>(this.apiUrl);
  }
    save(livraria: Livraria): Observable<Livraria> {
    return this.http.post<Livraria>(this.apiUrl, livraria);
  }
}
