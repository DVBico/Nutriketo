import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(email, password){

    try {
      const user=await this.authSvc.login(email.value, password.value);
      if(user){
         const isVerified = this.authSvc.isEmailVerified(user);
       this.redirectUser(true);
      }
    } catch (error) {
      console.log('Error',error);
      
    }

  }

  private redirectUser(isVerified:boolean): void{
    if(isVerified){
      this.router.navigate(['menu']);
    }else{
      this.router.navigate(['page']);
    }

  }

}
