import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService : AuthService){}
  canActivate(): Observable<boolean>{
    return this.authService.currentUser$.pipe(
      map(user =>{
        if (user) {return true} else {return false; alert('Invalid Session');};
      })
    )
  }}