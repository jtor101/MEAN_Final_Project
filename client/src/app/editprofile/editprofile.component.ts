// Imports
import { Component, OnInit } from "@angular/core";

// Selector settings
@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})

// Export
export class EditprofileComponent implements OnInit {
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
