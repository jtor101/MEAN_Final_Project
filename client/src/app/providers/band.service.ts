// Imports
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { map } from "rxjs/operators";

// Injectable settings
@Injectable({
  providedIn: "root"
})
// Export
export class BandService {
  private bandsEndpoint: string = "http://localhost:3000/bands/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  // Constructor
  constructor(private http: HttpClient) {}
  // Get Leagues function
  getLeagues() {
    return this.http
      .get(`${this.bandsEndpoint}leagues`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
  // Get Bands function
  getBands() {
    return this.http
      .get(`${this.bandsEndpoint}allbands`, this.httpOptions)
      .pipe(map(res => <any[]>res));
  }
}
