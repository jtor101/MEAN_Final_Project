import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bands",
  templateUrl: "./bands.component.html",
  styleUrls: ["./bands.component.css"]
})
export class BandsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
  }

  onLogout(): void {
    sessionStorage.setItem("loggedIn", "false");
  }
}
