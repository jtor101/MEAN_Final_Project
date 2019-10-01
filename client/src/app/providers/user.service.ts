// Imports
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map } from "rxjs/operators";

// Injectable
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

  private userId: number = 0;
  private userName: string = "";
  private isAuthenticated: boolean = false;
  private isAdmin: boolean = false;

  // Constructor
  constructor(private http: HttpClient) {}

  // Login handling
  login(username: string, password: string): Observable<any> {
    return this.http
      .post(
        `${this.usersEndpoint}login`,
        { username: username, password: password },
        this.httpOptions
      )
      .pipe(map(res => <any[]>res));
  }

  // Register handling
  register(username: string, password: string, email: string): Observable<any> {
    return this.http
      .post(
        `${this.usersEndpoint}register`,
        { username: username, password: password, email: email },
        this.httpOptions
      )
      .pipe(map(res => <any[]>res));
  }

  // Edit User handling
  updateUser(userId: number, email: string): Observable<any> {
    console.log(userId);
    console.log(email);
    return this.http
      .put(
        `${this.usersEndpoint}edituser/${userId}`,
        { email: email },
        this.httpOptions
      )
      .pipe(map(res => <any[]>res));
  }

  // Delete User handling
  deleteUser(userId: number) {
    return this.http
      .delete(`${this.usersEndpoint}deleteuser/${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // Gets All Users
  getUsers(): Observable<any> {
    return this.http
      .get(`${this.usersEndpoint}allusers`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // Gets One User
  getUser(userId: number): Observable<any> {
    return this.http
      .get(`${this.usersEndpoint}${userId}`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }

  // Setter/Getter for user ID
  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number {
    return this.userId;
  }

  // Setter/Getter for username
  setUserName(userName: string): void {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  // Setter/Getter for user authentication
  setAuth(isAuth: boolean): void {
    this.isAuthenticated = isAuth;
  }

  getAuth(): boolean {
    return this.isAuthenticated;
  }

  // Setter/Getter for administrative authentication
  setAdmin(isAdmin: boolean): void {
    this.isAdmin = isAdmin;
  }

  getAdmin(): boolean {
    return this.isAdmin;
  }
}
