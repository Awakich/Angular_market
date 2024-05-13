import { Injectable, signal } from "@angular/core";
import { Good } from "../interfaces/good";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  cartList = signal<Good[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

  addToCart(good: Good) {
    const existGood = this.cartList().find(g => g.id === good.id);

    if (existGood) {
      existGood.count += 1;

      this.cartList.update(goods => goods.map(g => g.id === good.id ? existGood : g));
    } else {
      this.cartList.update(goods => [...goods, { ...good, count: 1 }]);

    }

    localStorage.setItem('cart', JSON.stringify(this.cartList()))
  }

  minusFromCart(good: Good) {
    const existGood = this.cartList().find(g => g.id === good.id);

    if (existGood) {
      existGood.count -= 1;

      if (!existGood.count) {
        this.cartList.update(goods => goods.filter(g => g.id !== good.id))
      } else this.cartList.update(goods => goods.map((g) => g.id === good.id ? { ...g, count: existGood.count } : g))
    }

    localStorage.setItem('cart', JSON.stringify(this.cartList()));
  }

  removeGood(good: Good) {
    const index = this.cartList().findIndex(g => g.id === good.id);

    if (index !== -1) {
      this.cartList.update(goods => goods.filter(g => g.id !== good.id));
    }
    localStorage.setItem('cart', JSON.stringify(this.cartList()))
  }

  clearCart() {
    this.cartList.update(_ => [])
    localStorage.setItem('cart', JSON.stringify(this.cartList()))
  }
}
