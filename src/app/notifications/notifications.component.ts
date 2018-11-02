import { Component, OnInit } from '@angular/core';
import { Notifications } from './shared/notifications.model';
import { NotificationsService } from './shared/notifications.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	moduleId: module.id,
	selector: 'notifications',
	templateUrl: 'notifications.component.html',
})

export class NotificationsComponent implements OnInit {
	notifications: Notifications[] = [];

	constructor(
		private notificationsService: NotificationsService,
		private routerExtensions: RouterExtensions,
	) { }

	ngOnInit() {
		// this.notificationsService.getList().subscribe((res) => {
		// 	this.notifications = res;
		// });
	}

	goBack() {
	  this.routerExtensions.back();
	}
}