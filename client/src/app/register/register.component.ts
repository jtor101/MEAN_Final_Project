// Imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "./../providers/user.service";

// Selector settings
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})

// Export
export class RegisterComponent implements OnInit {
  pageTitle = "Register";
  username: string = "";
  email: string = "";
  password: string = "";
  passwordconf: string = "";

  error: boolean = false;
  errMsg: string = "";
  usernameError: string = "";
  passwordError: string = "";
  passwordconfError: string = "";
  emailError: string = "";
  infoError: string = "";

  // Constructor
  constructor(private userService: UserService, private router: Router) {}

  // On Init
  ngOnInit() {}

  // Register function
  onSubmit(): void {
    if (this.username == "") {
      this.usernameError = "User name is required.";
      this.error = true;
    } else if (this.username.length < 6) {
      this.usernameError = "Username must be at least 6 chars.";
      this.error = true;
    } else if (this.password == "") {
      this.usernameError = "";
      this.passwordError = "Password is required.";
      this.error = true;
    } else if (this.password.length < 6) {
      this.passwordError = "Password must be at least 6 chars.";
      this.error = true;
    } else if (this.passwordconf == "") {
      this.passwordError = "";
      this.passwordconfError = "Please confirm password.";
      this.error = true;
    } else if (this.password != this.passwordconf) {
      this.passwordconfError = "Passwords do not match";
      this.error = true;
    } else if (this.email == "") {
      this.passwordconfError = "";
      this.emailError = "Email Address is required.";
      this.error = true;
    } else {
      this.error = false;
      this.usernameError = "";
      this.passwordError = "";
      this.passwordconfError = "";

      // Call UserService to Register
      this.userService
        .register(this.username, this.email, this.password)
        .subscribe(data => {
          if (data["error"]) {
            this.infoError = "Registration unsuccessful.";
            this.error = true;
          } else {
            this.router.navigate(["login"]);
          }
        });
    }
  }

  // Reset button function
  onReset(): void {
    this.username = "";
    this.email = "";
    this.password = "";
    this.passwordconf = "";

    this.error = false;
    this.usernameError = "";
    this.passwordError = "";
    this.passwordconfError = "";
    this.infoError = "";
  }
}
