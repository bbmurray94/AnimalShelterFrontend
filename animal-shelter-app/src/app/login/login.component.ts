import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Login, Token } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  token: Token | undefined;

  constructor(private loginService: LoginService){}

  login()
  {
    console.log(this.username + " " + this.password);
    this.loginService.login(this.username, this.password).subscribe(token => {this.token = token; console.log(this.token)});
    
  }
}
