import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { SignupComponent } from './signup/signup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
    public userService: UserService,
    public dialog: MatDialog
  )
  {
  }
  public title = 'Chess Analysis Platform';

  greetingMessage(): string {
    if ( !this.userService.isLoggedIn )
      return "Not logged in";
    else
      return `Hello, ${this.userService.Username}`;
  }

  logIn(): void {
    let dialogRef = this.dialog.open(
      LoginComponent,
      {
        height: '500px',
        width: '350px'
      }
    );
  }

  register(): void {
    let dialogRef = this.dialog.open(
      SignupComponent,
      {
        height: '500px',
        width: '350px'
      }
    );
  }

  logOut(): void {
    console.log('Calling Log Out method');
  }
}
