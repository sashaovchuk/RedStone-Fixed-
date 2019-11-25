import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/products'
  }
  // getData(): Array<IUser>{return this.data}
  public getProduct(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.url)
  }
  public setProduct(product: IUser): Observable<Array<IUser>> {
    return this.http.post<Array<IUser>>(this.url, product)
  }
  public editProduct(product: IUser): Observable<Array<IUser>> {
    return this.http.put<Array<IUser>>(`${this.url}/${product.id}`, product)
  }
  public delProduct(id: number): Observable<Array<IUser>> {
    return this.http.delete<Array<IUser>>(`${this.url}/${id}`)
  }
}
