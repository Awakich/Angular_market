import { Component, inject } from '@angular/core';
import { GoodComponent } from '../home/components/good/good.component';
import { FavoriteService } from './favorite.service';
import { Good } from '../interfaces/good';

@Component({
  selector: 'app-favorite',
  standalone: true,
  imports: [GoodComponent],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  favoriteService = inject(FavoriteService);

  favoriteList = this.favoriteService.favoriteList;

  toggleFavorite(value: boolean, good: Good) {
    this.favoriteService.toggleFavorite(value, good);
  }

  clearFavorite() {
    this.favoriteService.clearFavorite()
  }
}
