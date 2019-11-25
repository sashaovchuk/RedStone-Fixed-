import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhoneBookRoutingModule } from './phone-book-routing.module';
import { PhoneBookComponent } from './phone-book.component';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap'
import { OrderModule } from 'ngx-order-pipe';
import { FiltersPipe } from '../../shared/pipes/filters.pipe'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask'
import { ProductService } from 'src/app/shared/servisec/product.service';
import { AuthPhoneBookInterceptor } from 'src/app/shared/interceptors/api.interceptors';
import { RouteGuardGuard } from 'src/app/shared/guards/route-guard.guard';

@NgModule({
  declarations: [
    PhoneBookComponent,
    FiltersPipe,
  ],
  imports: [
    CommonModule,
    PhoneBookRoutingModule,
    OrderModule,
    TextMaskModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ProductService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthPhoneBookInterceptor,
      multi: true
    }, RouteGuardGuard
  ]
})
export class PhoneBookModule { }
