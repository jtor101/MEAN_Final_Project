// Imports
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { UserService } from "./../providers/user.service";

// Selector settings
@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})

// Export
export class EditprofileComponent implements OnInit {
  sub: any;

  // Constructor
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  userId: number = 0;
  username: string = "";
  email: string = "";

  errMsg: string = "";
  errorFound: boolean = false;

  // Navigates back to /bands
  goBands(): void {
    this.router.navigate(["/bands"]);
  }

  // On Init
  ngOnInit() {
    console.log(this.userService.getAuth());
    if (!this.userService.getAuth()) {
      this.router.navigate(["login"]);
    }

    this.userId = this.userService.getUserId();

    this.userService.getUser(this.userId).subscribe(data => {
      this.username = data.USERNAME;
      this.email = data.EMAIL;
    });
  }

  // Edit Profile primary function
  onSave(): void {
    if (this.email.trim() == "") {
      this.errMsg = "Missing Email Address.";
      this.errorFound = true;
    } else {
      this.errorFound = false;
      this.errMsg = "";

      // Call UserService to Edit Profile
      this.userService.updateUser(this.userId, this.email).subscribe(data => {
        if (data["errorFound"]) {
          this.errMsg = "Update unsuccessful.";
          this.errorFound = true;
        } else {
          this.userService.getUser(this.userId).subscribe(data => {
            console.log(data);
            this.username = data.USERNAME;
            this.email = data.EMAIL;
          });
        }
      });
    }
  }

  // Call UserService to Delete User Profile
  onDelete(): void {
    this.userService.deleteUser(this.userId).subscribe(data => {
      this.userService.setAuth(false);
      this.userService.setAdmin(false);
      this.router.navigate(["/"]);
    });
  }
}
