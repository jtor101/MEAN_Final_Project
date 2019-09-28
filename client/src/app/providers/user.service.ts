// Imports
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map } from "rxjs/operators";

// Injectable settings
@Injectable({
  providedIn: "root"
})

// Export
export class UserService {
  private usersEndpoint: string = "http://localhost:3000/users/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // Constructor
  constructor(private http: HttpClient) {}

  // Login function
  login(username: string, password: string) {
    return this.http
      .post(
        `${this.usersEndpoint}login`,
        { username: username, password: password },
        this.httpOptions
      )
      .pipe(map(res => <any[]>res));
  }

  // Register function
  register(username: string, email: string, password: string) {
    return this.http
      .post(
        `${this.usersEndpoint}register`,
        { username: username, password: password, email: email },
        this.httpOptions
      )
      .pipe(map(res => <any[]>res));
  }

  // Delete User function
  deleteUser(userId: number) {
    return this.http
      .delete(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // Get Users function
  getUsers() {
    return this.http
      .get(`${this.usersEndpoint}allusers`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
