import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./../providers/user.service";
import { User } from "../models/user.model";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
    this.userService.getUsers().subscribe(data => {
      data.forEach((user, index) => {
        this.users.push(
          new User(user.ID, user.USERNAME, user.EMAIL, user.PASSWORD)
        );
      });
    });
  }
}
