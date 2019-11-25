import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProdDetService } from 'src/app/shared/servisec/prod-det.service';
import { AuthProdDetInterceptor } from 'src/app/shared/interceptors/api.interceptors';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProdDetService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthProdDetInterceptor,
      multi: true
    }
  ]
})
export class ProductsModule { }
