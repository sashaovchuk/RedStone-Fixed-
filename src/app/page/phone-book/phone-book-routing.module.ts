import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoneBookComponent } from './phone-book.component';
import { RouteGuardGuard } from 'src/app/shared/guards/route-guard.guard';

const routes: Routes = [{ path: '', component: PhoneBookComponent, canActivate: [RouteGuardGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneBookRoutingModule { }
