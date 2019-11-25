import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./page/home/home.module').then(m => m.HomeModule) },
  { path: 'phone-book', loadChildren: () => import('./page/phone-book/phone-book.module').then(m => m.PhoneBookModule) },
  { path: 'products/:id', loadChildren: () => import('./page/products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
