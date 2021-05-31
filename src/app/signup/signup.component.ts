import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  constructor(
    public userService: UserService,
    public dialogRef: MatDialogRef<SignupComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  public email: string = "";
  public username: string = "";
  public password: string = "";

  async onSignup() {
    try {
      await this.userService.signUp(this.email, this.username, this.password);
    } catch ( error ) {
      this.snackBar.open(error, "Dismiss", {duration: 3000});
    }
    this.snackBar.open(`Registered new user with username ${this.username}`, "Dismiss", {duration: 3000});
    this.dialogRef.close();
  }
}
