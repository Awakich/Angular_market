import { Injectable, signal } from '@angular/core';
import { Good } from '../interfaces/good';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteList = signal<Good[]>(JSON.parse(localStorage.getItem('favorite') || '[]'));

  getAllFavorites() {
    return this.favoriteList()
  }

  toggleFavorite(value: boolean, good: Good) {
    good.inFavorite = value;

    if (good.inFavorite) {
      this.favoriteList.update(goods => [...goods, good])
    }
    else {
      this.favoriteList.update(goods => goods.filter(g => g.id !== good.id))
    }

    localStorage.setItem('favorite', JSON.stringify(this.favoriteList()))
  }

  clearFavorite() {
    this.favoriteList.update(_ => [])
    localStorage.setItem('cart', JSON.stringify(this.favoriteList()))
  }
}
