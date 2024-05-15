import { Injectable, effect, signal } from '@angular/core';
import { Good } from '../interfaces/good';
import { localStorageSignal } from '../hooks/localStorage';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteList = localStorageSignal<Good[]>('favorite', []);

  getAllFavorites() {
    return this.favoriteList()
  }

  toggleFavorite(value: boolean, good: Good) {
    good.inFavorite = value;

    if (good.inFavorite) {
      this.favoriteList.update(goods => [...goods, good])
    }
    else {
      this.favoriteList.update(goods => goods.filter((g: Good) => g.id !== good.id))
    }
  }

  clearFavorite() {
    this.favoriteList.update(_ => [])
  }
}
