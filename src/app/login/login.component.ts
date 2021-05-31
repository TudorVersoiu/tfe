import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<LoginComponent>,
    public snackBar: MatSnackBar)
    { }

  public username: string = "";
  public password: string = "";

  ngOnInit(): void {
  }

  public async onLogin() {
    try {
      await this.userService.logIn(this.username, this.password);
    } catch (error) {
      this.snackBar.open(error, "Dismiss", {duration: 3000});
    } finally {
      this.dialogRef.close();
    }
  }
}
