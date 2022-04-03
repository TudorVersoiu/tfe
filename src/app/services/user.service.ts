import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendUrl } from '../app-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private is_logged_in: boolean = false;
  private username: string = "";
  private email: string = "";
  private role: string = "none";
  private access_token: string = "";

  get authBearer(): string { 
    return `Bearer ${this.access_token}`;
  }

  get isLoggedIn(): boolean {
    return this.is_logged_in;
  }

  get Username(): string {
    if ( this.username )
      return this.username;
    else
      return this.email;
  }

  get Role(): string { 
    return this.role;
  }

  // REST call to backend to login
  // obtain JWT token
  async logIn(username: string, password: string) {
    let response: any;
    try {
      response = await this.http.post(
        `${backendUrl}/users/login`,
        {username: username, email: username, password: password},
        {observe: 'body', responseType: 'json'}).toPromise();
    } catch ( error ) {
      throw error.error;
    }

    if ( !response ) throw "No response";
    this.access_token = response.accessToken;

    let login_details: any = JSON.parse(atob(this.access_token.split('.')[1]));

    this.is_logged_in = true;
    if ( login_details.email ) { this.username = login_details.email; this.email = login_details.email; }
    if ( login_details.username ) this.username = login_details.username;
    if ( login_details.role ) this.role = login_details.role;

    console.log(login_details);
  }

  // REST call to backend to register new user
  async signUp(email: string, username: string, password: string) {
    let response: any;
    try {
      response = await this.http.post(
        `${backendUrl}/users/register`,
        {username: username, email: email, password: password},
        {observe: 'body', responseType: 'json'}
      ).toPromise();
    } catch ( error ) {
      console.error(error);
      throw error.error;
    }
  }
}
