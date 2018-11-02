import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "login",
  moduleId: module.id,
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
    /* ***********************************************************
    * Use the "ngOnInit" handler to initialize data for this component.
    *************************************************************/
  }

  public goBack() {
    this.routerExtensions.backToPreviousPage();
  }
}
