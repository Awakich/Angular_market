import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { GoodDetailsComponent } from './home/good-details/good-details.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent, title: 'Home Page'
  },

  {
    path: 'favorite', component: FavoriteComponent, title: 'Favorite Page'
  },

  {
    path: 'goods/:id', component: GoodDetailsComponent, title: 'Good Details Page'

  },

  {
    path: 'cart', component: CartComponent, title: 'Cart Page'
  }
];
