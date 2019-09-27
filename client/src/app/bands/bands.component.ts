import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BandService } from "./../providers/band.service";
import { League } from "./../models/league.model";
import { Band } from "./../models/band.model";

@Component({
  selector: "app-bands",
  templateUrl: "./bands.component.html",
  styleUrls: ["./bands.component.css"]
})
export class BandsComponent implements OnInit {
  leagues: Array<League> = [];
  bands: Array<Band> = [];

  constructor(private bandService: BandService, private router: Router) {}

  ngOnInit() {
    var val = sessionStorage.getItem("loggedIn");
    if (val == "false") {
      location.replace("http://localhost:4200/login");
    }
    this.bandService.getLeagues().subscribe(data => {
      data.forEach((league, index) => {
        this.leagues.push(
          new League(league.NAME, league.ID, league.DESCRIPTION)
        );
      });
    });

    this.bandService.getBands().subscribe(data => {
      data.forEach((band, index) => {
        this.bands.push(
          new Band(band.TEAMNAME, band.MANAGERNAME, band.MANAGERPHONE)
        );
      });
    });
  }

  onLogout(): void {
    sessionStorage.setItem("loggedIn", "false");
  }
}
