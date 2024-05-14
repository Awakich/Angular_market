import { Routes } from '@angular/router';
import { homeRoutes } from './home/home.routes';

export const routes: Routes = [
  ...homeRoutes,
  {
    path: 'favorite', title: 'Favorite Page', loadComponent: () => import('./favorite/favorite.component').then(m => m.FavoriteComponent)
  },


  {
    path: 'cart', loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
  }
];
