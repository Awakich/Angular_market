import { Component, OnInit, inject, signal } from '@angular/core';
import { GoodsService } from './goods.service';
import { FavoriteService } from '../favorite/favorite.service';
import { Good } from '../interfaces/good';
import { GoodComponent } from './components/good/good.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoodComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  goodService: GoodsService = inject(GoodsService)
  favoriteService: FavoriteService = inject(FavoriteService)

  goodsList = signal<Good[]>([])

  ngOnInit() {
    this.goodService.getAllGoods().subscribe(goods => this.goodsList.set(goods.products))
  }

  toggleFavorite(value: boolean, good: Good) {
    this.favoriteService.toggleFavorite(value, good);
  }
}
