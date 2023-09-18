import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private sharedService : SharedService, private router : Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : any {
      console.log('CanActivate called');
    let isLoggedIn = this.sharedService.isUserLoggedIn;
    if (isLoggedIn){
      return true
    } else {
      this.router.navigate(['/signIn']);
    }
  }
}
