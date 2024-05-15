import { Injectable } from "@angular/core";
import { Good } from "../interfaces/good";
import { localStorageSignal } from "../hooks/localStorage";

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList = localStorageSignal<Good[]>('cart', []);

  addToCart(good: Good) {
    const existGood = this.cartList().find((g: Good) => g.id === good.id);

    if (existGood) {
      existGood.count += 1;

      this.cartList.update((goods: Good[]) => goods.map((g: Good) => g.id === good.id ? existGood : g));
    } else {
      this.cartList.update((goods: Good[]) => [...goods, { ...good, count: 1 }]);
    }
  }

  minusFromCart(good: Good) {
    const existGood = this.cartList().find((g: Good) => g.id === good.id);

    if (existGood) {
      existGood.count -= 1;

      if (!existGood.count) {
        this.cartList.update((goods: Good[]) => goods.filter((g: Good) => g.id !== good.id))
      } else this.cartList.update((goods: Good[]) => goods.map((g: Good) => g.id === good.id ? { ...g, count: existGood.count } : g))
    }
  }

  removeGood(good: Good) {
    const index = this.cartList().findIndex((g: Good) => g.id === good.id);

    if (index !== -1) {
      this.cartList.update((goods: Good[]) => goods.filter((g: Good) => g.id !== good.id));
    }
  }

  clearCart() {
    this.cartList.update((_: Good[]) => []);
  }
}
