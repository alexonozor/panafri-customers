import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Notifications } from './notifications.model';

@Injectable()
export class NotificationsService {

	constructor(private http: Http) { }
}