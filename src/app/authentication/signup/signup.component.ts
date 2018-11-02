import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "Signup",
  moduleId: module.id,
  templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
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
