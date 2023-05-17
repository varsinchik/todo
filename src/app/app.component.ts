import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _router: Router,
    private _location: Location) {
  };

  ngOnInit(): void {
  };

//TODO переделать back()
  back() {
    if (this._router.url !== '/') {
      this._location.back();
    }
  };
}
