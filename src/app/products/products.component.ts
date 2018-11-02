import { Component, OnInit } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { Products } from './shared/products.model';
import { ProductsService } from './shared/products.service';
import { switchMap } from "rxjs/operators";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'products',
	templateUrl: 'products.component.html',
	styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
	products: Products[] = [];

	constructor(
		private productsService: ProductsService,
		private routerExtensions: RouterExtensions,
	) { }

	ngOnInit() {
		
	}

	public sBLoaded(args) {
		var searchbar: SearchBar = <SearchBar>args.object;
		searchbar.android.clearFocus();
	}

	public goBack() {
		this.routerExtensions.backToPreviousPage();
  }

}