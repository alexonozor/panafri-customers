import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import { Products } from './products.model';

@Injectable()
export class ProductsService {

	constructor(private http: Http) { }
}