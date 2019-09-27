import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "./../providers/user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  error: boolean = false;
  usernameError: string = "";
  passwordError: string = "";
  loginError: string = "";

  // create instance of UserService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onSubmit(): void {
    if (this.username == "") {
      this.usernameError = "User name is required.";
      this.error = true;
    } else if (this.password == "") {
      this.passwordError = "Password is required.";
      this.usernameError = "";
      this.error = true;
    } else {
      this.error = false;
      this.usernameError = "";
      this.passwordError = "";

      // Call UserService to authenticate
      this.userService.login(this.username, this.password).subscribe(data => {
        if (data["error"]) {
          console.log(data);
          this.loginError = "Login unsuccessful.";
          this.error = true;
        } else {
          this.router.navigate(["bands"]);
        }
      });
    }
  }
  onReset(): void {
    this.username = "";
    this.password = "";

    this.error = false;
    this.usernameError = "";
    this.passwordError = "";
    this.loginError = "";
  }
}
