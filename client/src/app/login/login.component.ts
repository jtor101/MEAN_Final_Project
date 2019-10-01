// Imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./../providers/user.service";

// Selector settings
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

// Export
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  email: string = "";

  error: boolean = false;
  usernameError: string = "";
  passwordError: string = "";
  loginError: string = "";

  // Constructor
  constructor(private userService: UserService, private router: Router) {}

  // On Init
  ngOnInit() {}

  // Submit button function
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
          this.loginError = data["error"];
          this.error = true;
        } else {
          this.userService.setAuth(true);
          this.userService.setUserId(data.USERID);
          this.userService.setUserName(data.USERNAME);

          if (data.IS_ADMIN === 1) {
            this.userService.setAdmin(true);
          } else {
            this.userService.setAdmin(false);
          }

          this.router.navigate(["bands"]);
        }
      });
    }
  }
  // Reset button function
  onReset(): void {
    this.username = "";
    this.password = "";

    this.error = false;
    this.usernameError = "";
    this.passwordError = "";
    this.loginError = "";
  }
}
