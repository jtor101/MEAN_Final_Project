// Imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./../providers/user.service";
import { User } from "../models/user.model";

// Selector settings
@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})

// Export
export class AdminComponent implements OnInit {
  // Array
  users: Array<User> = [];

  // Constructor
  constructor(private userService: UserService, private router: Router) {}

  goBands(): void {
    this.router.navigate(["/bands"]);
  }

  // On Init
  ngOnInit() {
    // Populates User Table
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(
          new User(user.ID, user.USERNAME, user.EMAIL, user.PASSWORD)
        );
      });
    });
  }
}
