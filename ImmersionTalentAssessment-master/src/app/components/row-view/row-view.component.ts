import { Component, OnInit } from '@angular/core';
import { DataService } from './../../service/data.service';

@Component({
  selector: 'app-row-view',
  templateUrl: './row-view.component.html',
  styleUrls: ['./row-view.component.css']
})
export class RowViewComponent  {

  users: any[];

  constructor(public dataService: DataService) {
    this.dataService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;


    });
  }


}
