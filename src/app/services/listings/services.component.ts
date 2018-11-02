import { Component, OnInit } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { Services } from '../shared/services.model';
import { ServicesService } from '../shared/services.service';
import { switchMap } from "rxjs/operators";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'services',
	templateUrl: 'services.component.html',
	styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit {
	services: Services[] = [];


	constructor(
		private servicesService: ServicesService,
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