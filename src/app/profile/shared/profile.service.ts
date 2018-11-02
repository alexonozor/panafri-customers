import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Profile } from './profile.model';

@Injectable()
export class ProfileService {

	constructor(private http: Http) { }

}