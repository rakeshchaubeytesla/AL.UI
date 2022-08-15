import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiurl;
  private currentUserSource = new ReplaySubject<user>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(private http: HttpClient) { }

  login(loginModel: any){
    return this.http.post(this.baseUrl + 'User/login',loginModel).pipe(
      map((responce: any) => {
        const user = responce;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          console.log(JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }

  setCurrentUser(user:user){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
     this.currentUserSource.unsubscribe();
  }
}
