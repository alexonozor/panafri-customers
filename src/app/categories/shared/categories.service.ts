import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { Categories } from './categories.model';

@Injectable()
export class CategoriesService {

	constructor(private http: Http) { }
}