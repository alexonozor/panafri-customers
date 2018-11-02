import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Categories } from '../shared/categories.model';
// import { CategoriesService } from '../shared/categories.service';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';


@Component({
	moduleId: module.id,
	selector: 'listing',
	templateUrl: 'listingCategories.html',
	styleUrls: ['./listingCategories.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListingCategoryComponent implements OnInit {
	public categories: Categories[] = [];
    private counter: number;

	constructor(
		private routerExtensions: RouterExtensions,
	) {}

	ngOnInit() {
		this.counter = 0;
        for (var i = 0; i < 50; i++) {
            this.categories.push({ id: `${i+1}`, name: 'category' });
            this.counter = i;
        }
	}

	goBack() {
		this.routerExtensions.back();
	}

	gotoCategory(item) {
		this.routerExtensions.navigate(['categories', item.id])
	}

}