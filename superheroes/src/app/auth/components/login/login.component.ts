import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .background {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-image: url(../../../../assets//dc-marvel.jpg)
    } 
    .button {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center
    }
    `
  ]
})
export class LoginComponent {

  constructor(private router: Router, private authService: AuthService) { }

  login(){
    this.authService.login()
                    .subscribe( resp => {
                      console.log(resp)
                      if(resp.id){
                        this.router.navigate(['./heroe'])
                      }
                    })
  }

}
