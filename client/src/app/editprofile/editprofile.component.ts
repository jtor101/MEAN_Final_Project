// Imports
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user.model";

// Selector settings
@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})

// Export
export class EditprofileComponent implements OnInit {
  users: Array<User> = [];
  // Constructor
  constructor() {}

  // On Init
  ngOnInit() {
    // Session storage for login status
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
  }
}
