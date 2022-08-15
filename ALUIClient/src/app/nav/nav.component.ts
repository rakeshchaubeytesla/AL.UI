import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../_model/user';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 currentUser$: Observable<user> | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser$= this.authService.currentUser$;

    alert('sdfsdf000');
  }

  getCurrentUser(){
    this.authService.currentUser$.subscribe( user =>{
    },error =>{
      console.log(error);
    })
  }

}
