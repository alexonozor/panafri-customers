import { Component, OnInit } from '@angular/core';
import { Categories } from '../shared/categories.model';
// import { CategoriesService } from '../shared/categories.service';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';
import { SearchBar } from "ui/search-bar";
import { switchMap } from "rxjs/operators";


@Component({
	moduleId: module.id,
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
	categoryId: String;
	constructor(
		private routerExtensions: RouterExtensions,
		private pageRoute: PageRoute
	 ) { }

	ngOnInit() {
		this.pageRoute.activatedRoute.pipe(switchMap(activatedRoute => activatedRoute.params)).forEach((params) => { 
			this.categoryId = params.id
		});
	 }

	public sBLoaded(args) {
		var searchbar: SearchBar = <SearchBar>args.object;
		searchbar.android.clearFocus();
	}


	goBack() {
		this.routerExtensions.back();
	}

	goToProduct(i) {
		this.routerExtensions.navigate(['products', i]);
	  }
	
	  request() {
		this.routerExtensions.navigate(['requests']);
	  }
}