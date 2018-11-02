import { Component, OnInit } from '@angular/core';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'requests',
	templateUrl: './requests.component.html',
	styleUrls: ['./requests.component.css']
})

export class RequestsComponent implements OnInit {
  isBusy: Boolean = true;
  size = [this.random(), this.random(), this.random()];
  progress = [this.random(0, 100), this.random(0, 100), this.random(0, 100)];
  constructor(
		private routerExtensions: RouterExtensions,
		private pageRoute: PageRoute
  ) { }
  
  

	ngOnInit() {
		this.getIndicatorBusy();
  }

	getIndicatorBusy() {
		setTimeout(() => {
			this.isBusy = false;
		}, 7000)
  }

  onBusyChanged(event) {
    // handle indicator busy change
  }

  random(min = 50, max = 150) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
  public goBack() {
		this.routerExtensions.backToPreviousPage();
  }
}