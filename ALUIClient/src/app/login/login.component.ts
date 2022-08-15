import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any = {};
  loggedin: boolean = false;
  constructor(private router: Router,public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
     this.authService.login(this.model).subscribe(responce =>{
      this.loggedin = true;
      console.log(this.authService.currentUser$);
      this.router.navigate(['/home']);
     });
  }

  logout(){
    this.authService.logout();
  }


  
  

}
