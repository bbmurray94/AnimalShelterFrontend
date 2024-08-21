import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
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

  constructor(private accountService: AccountService, private router: Router){}

  login()
  {
    console.log(this.username + " " + this.password);
    this.accountService.login(this.username, this.password).subscribe({
      next: token => {
        this.token = token;
        console.log(this.token);
      },
      complete: () => {
        this.router.navigate(['/board']);
      }
      });
  }
}
