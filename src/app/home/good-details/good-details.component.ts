import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { Good } from '../../interfaces/good';
import { NgOptimizedImage } from '@angular/common';
import { GoodsService } from '../goods.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-good-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './good-details.component.html',
  styleUrl: './good-details.component.scss'
})
export class GoodDetailsComponent implements OnInit {
  @Input('id') goodId: number = -1;

  goodService: GoodsService = inject(GoodsService)
  cartService = inject(CartService)

  goodInfo = signal<Good | null>(null)

  ngOnInit(): void {
    this.goodService.getGoodById(this.goodId)?.subscribe((good: Good) => this.goodInfo.set({ ...good, count: 0 }))
  }

  addToCart() {
    this.cartService.addToCart(this.goodInfo()!)
  }
}
