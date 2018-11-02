import { Component, OnInit } from '@angular/core';
import { Profile } from './shared/profile.model';
import { ProfileService } from './shared/profile.service';
import { RouterExtensions } from 'nativescript-angular/router';


@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html',
})

export class ProfileComponent implements OnInit {
	profile: Profile[] = [];

	constructor(
		private profileService: ProfileService,
		private routerExtensions: RouterExtensions
	) { }

	ngOnInit() {}

	goBack() {
		this.routerExtensions.back();
	}
}