import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;


  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit()
  {
  }

  doLogin(){
    this.authService.login(this.email, this.password).then(  () =>{
      this.router.navigate(['/inicio']);
    }).catch(err => {
      alert('Los datos son incorrectos o no existe el usuario');
    });



  }

  loginGoogle()
  {
    alert('estas haciendo login');
  }

}
