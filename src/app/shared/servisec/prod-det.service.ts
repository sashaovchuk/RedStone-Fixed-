import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdDetService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/products'
  }

  public getProdDet(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.url}/${id}`)
  }
}
