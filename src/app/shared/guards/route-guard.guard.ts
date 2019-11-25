import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardGuard implements CanActivate {
  constructor(private _route: Router){}
  canActivate(): boolean {
    if(confirm('You really want to see phone-book?')){
      return true
    }
    else{
      this._route.navigate(['home'])
      return false
    }
  }
    
}

