import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Services } from './services.model';

@Injectable()
export class ServicesService {

	constructor(private http: Http) { }

}