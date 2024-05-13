import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Good } from '../interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor() { }
  private url = 'https://dummyjson.com/products';
  private http = inject(HttpClient)

  getAllGoods(): Observable<any> {
    return this.http.get<Good[]>(this.url)
  }

  getGoodById(id: number): Observable<any> {
    return this.http.get<Good>(this.url + '/' + id)
  }
}
