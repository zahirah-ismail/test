import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent  {
  users: any[];

  constructor(public dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
   }

}
