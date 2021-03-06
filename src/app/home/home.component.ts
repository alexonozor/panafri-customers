import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { SearchBar } from "ui/search-bar";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  constructor(
    public router: Router,
    private routerExtensions: RouterExtensions
  ) { }

  ngOnInit() {}

  // submit() {
  //   this.router.navigate(['authenticate']);
  // }

  public sBLoaded(args){
    var searchbar:SearchBar = <SearchBar>args.object;
    searchbar.android.clearFocus();
  }

  onOpenDrawerTap() {
    this.drawerComponent.sideDrawer.showDrawer();
  }

  onCloseDrawerTap() {
    this.drawerComponent.sideDrawer.closeDrawer();
  }

  goToProduct(i) {
    this.routerExtensions.navigate(['products', i]);
  }

  request() {
    this.routerExtensions.navigate(['requests']);
  }

  goToCategories() {
    this.routerExtensions.navigate(['categories']);
  }

  goToProducts() {
    this.routerExtensions.navigate(['products']);
  }

  goToServices() {
    this.routerExtensions.navigate(['services']);
  }

  goToNotifications() {
    this.routerExtensions.navigate(['notifications']);
  }

  logout() {
    this.routerExtensions.navigate(['authentication', 'login']);
  }

  goToProfile() {
    this.routerExtensions.navigate(['profile'])
  }
}