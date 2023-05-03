import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  hasHistoy: boolean = false

  constructor(
    private _router: Router,
    private _location: Location) {

  }

  ngOnInit(): void {
    this._router.events.subscribe(() => console.log(this._location.getState()))
    this._router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.hasHistoy = !!this._location.getState();
      }
    })

  }
//TODO переделать back()
  back() {
    this._location.back()
  }


}
