import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { UserService } from "./../providers/user.service";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})
export class EditprofileComponent implements OnInit {
  sub: any;

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

  goBands(): void {
    this.router.navigate(["/bands"]);
  }

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
