import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Good, Goods } from '../interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {
  constructor() { }
  private url = 'https://dummyjson.com/products';
  private http = inject(HttpClient)

  getAllGoods() {
    return this.http.get<Goods>(this.url)
  }

  getGoodById(id: number) {
    return this.http.get<Good>(this.url + '/' + id)
  }

  getCategories() {
    return this.http.get<string[]>(this.url + '/categories')
  }

  getCategoryGoods(category: string) {
    return this.http.get<Goods>(this.url + '/category/' + category)
  }
}
