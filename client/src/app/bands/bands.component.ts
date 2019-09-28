// Imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BandService } from "./../providers/band.service";
import { League } from "./../models/league.model";
import { Band } from "./../models/band.model";

// Selector settings
@Component({
  selector: "app-bands",
  templateUrl: "./bands.component.html",
  styleUrls: ["./bands.component.css"]
})

// Export
export class BandsComponent implements OnInit {
  // Arrays
  leagues: Array<League> = [];
  bands: Array<Band> = [];

  // Constructor
  constructor(private bandService: BandService, private router: Router) {}

  // On Init
  ngOnInit() {
    // Session storage for login status
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
    // Populates League Dropdown
    this.bandService.getLeagues().subscribe(data => {
      data.forEach((league, index) => {
        this.leagues.push(
          new League(league.NAME, league.ID, league.DESCRIPTION)
        );
      });
    });

    // Populates Band Cards
    this.bandService.getBands().subscribe(data => {
      data.forEach((band, index) => {
        this.bands.push(
          new Band(band.TEAMNAME, band.MANAGERNAME, band.MANAGERPHONE)
        );
      });
    });
  }

  // Adjusts Session storage on logout
  onLogout(): void {
    sessionStorage.setItem("loggedIn", "false");
  }
}
