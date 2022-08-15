import { Component } from '@angular/core';
import { user } from './_model/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALUIClient';
   constructor (private userService: AuthService){
    this.setCurrentUser();
   }

   setCurrentUser(){
    const user : user = JSON.parse(localStorage.getItem('user')?? "");
    this.userService.setCurrentUser(user);
   }
}
