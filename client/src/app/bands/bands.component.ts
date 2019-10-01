// Imports
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BandService } from "./../providers/band.service";
import { League } from "./../models/league.model";
import { Band } from "./../models/band.model";

import { UserService } from "./../providers/user.service";

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
  constructor(
    private userService: UserService,
    private bandService: BandService,
    private router: Router
  ) {}

  // On Init
  ngOnInit() {
    if (!this.userService.getAuth()) {
      this.router.navigate(["login"]);
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

  // Adjusts Auth/Admin settings on logout
  onLogout(): void {
    this.userService.setAuth(false);
    this.userService.setAdmin(false);
    this.router.navigate(["/"]);
  }

  // Admin
  goAdmin(): void {
    this.router.navigate(["/admin"]);
  }

  // Edit Profile
  goEdit(): void {
    this.router.navigate(["/editprofile"]);
  }

  // Gets Admin status
  getAdmin(): boolean {
    return this.userService.getAdmin();
  }
}
