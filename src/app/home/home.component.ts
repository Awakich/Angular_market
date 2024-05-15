import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { GoodsService } from './goods.service';
import { FavoriteService } from '../favorite/favorite.service';
import { Good } from '../interfaces/good';
import { GoodComponent } from './components/good/good.component';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GoodComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  goodService: GoodsService = inject(GoodsService)
  favoriteService: FavoriteService = inject(FavoriteService)

  goodsList = signal<Good[]>([])
  categoriesList = signal<string[]>([])
  userInput = signal<string>('')

  filteredItems = computed(() => this.goodsList().filter(good => good.title.toLowerCase().includes(this.userInput().toLowerCase())))

  ngOnInit() {
    this.goodService.getAllGoods().subscribe(goods => this.goodsList.set(goods.products))
    this.goodService.getCategories().subscribe(categories => this.categoriesList.set(categories))
  }

  toggleFavorite(value: boolean, good: Good) {
    this.favoriteService.toggleFavorite(value, good);
  }

  setCategory(category: string) {
    this.goodService.getCategoryGoods(category).subscribe(goods => this.goodsList.set(goods.products))
  }

  clearCategory() {
    this.goodService.getAllGoods().subscribe(goods => this.goodsList.set(goods.products))
  }
}
