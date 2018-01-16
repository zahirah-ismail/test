import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class DataService {

  constructor(public http: Http) {
  }

getUsers() {
   return this.http.get('assets/Employees.json').map(res => res.json());
}
}
