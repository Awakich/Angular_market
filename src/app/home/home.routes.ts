import { Routes } from "@angular/router";

export const homeRoutes: Routes = [
  {
    path: '', title: 'Home Page', loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },

  {
    path: 'goods/:id', title: 'Details Page', loadComponent: () => import('./good-details/good-details.component').then(m => m.GoodDetailsComponent)
  }
]
