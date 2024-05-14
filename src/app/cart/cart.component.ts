import { Component, computed, inject } from '@angular/core';
import { GoodComponent } from '../home/components/good/good.component';
import { CartService } from './cart.service';
import { FavoriteService } from '../favorite/favorite.service';
import { Good } from '../interfaces/good';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [GoodComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartService = inject(CartService);
  favoriteService = inject(FavoriteService);

  cartList = this.cartService.cartList;
  totalPrice = computed(() => this.cartList().reduce((sum: string, good: Good) => sum + good.count * good.price, 0))
  totalAmount = computed(() => this.cartList().reduce((sum: string, good: Good) => sum + good.count, 0))

  toggleFavorite(value: boolean, good: Good) {
    this.favoriteService.toggleFavorite(value, good);
  }

  minusGood(good: Good) {
    this.cartService.minusFromCart(good);
  }

  plusCart(good: Good) {
    this.cartService.addToCart(good);
  }

  clearCart() {
    this.cartService.clearCart()
  }

  removeGood(good: Good) {
    this.cartService.removeGood(good);
  }
}
