import { Component, OnInit } from '@angular/core';
import { RouterExtensions, PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
	moduleId: module.id,
	selector: 'product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
	id: Number;
  isBusy: Boolean = true;
  protected images: Array<any> = [];

	constructor(
		private routerExtensions: RouterExtensions,
		private pageRoute: PageRoute
	) { 
    this.images = [
      {  url: 'https://unsplash.it/400/300/?image=867' },
      {  url: 'https://unsplash.it/400/300/?image=870' },
      {  url: 'https://unsplash.it/400/300/?image=876' },
  ];
  }

	ngOnInit() {
    this.getIndicatorBusy();
		// use switchMap to get the latest activatedRoute instance
		this.pageRoute.activatedRoute.pipe(
			switchMap(activatedRoute => activatedRoute.params)
		).forEach((params) => { 
			this.id = params["id"]; 
		});
	}

	public goBack() {
		this.routerExtensions.backToPreviousPage();
  }


  
  getIndicatorBusy() {
    setTimeout(() => {
      this.isBusy = false;
    }, 7000)
  }

  onBusyChanged(event) {
    // handle indicator busy change
  }
}