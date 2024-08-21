import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { CurrentUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animal Shelter';
  currentUser: CurrentUser | undefined;

  constructor(private accountService: AccountService, private router: Router){}

  ngOnInit(){
    this.getCurrentUser();
    this.accountService.login$.subscribe(() => {
      this.getCurrentUser();
    });
  }

  getCurrentUser() {
    this.accountService.getCurrentUser().subscribe(currentUser => this.currentUser = currentUser); 
  }

  logout(){
    this.accountService.logout().subscribe({
      complete: () => {
        this.currentUser = undefined;
        this.router.navigate(['/login']);
      }
    });

  }
}
