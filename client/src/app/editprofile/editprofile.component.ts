import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-editprofile",
  templateUrl: "./editprofile.component.html",
  styleUrls: ["./editprofile.component.css"]
})
export class EditprofileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
  }
}
