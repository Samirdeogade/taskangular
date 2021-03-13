import { Component } from '@angular/core';
import { user } from './user.modal'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'task';
  usercount: number = 10;
  userArr: user[];
  name: any;
  email: any;
  startdate: any;
  enddate: any;
  experience: any;
  popup: boolean = false;
  count: number = 0;
  constructor() {
    this.userArr = [{
      name: 'sameer Deogade',
      userid: 1,
      email: 'sameer@gmail.com',
      experience: '1.5'
    },
    {
      
      name: 'pratik Deogade',
      userid: 2,
      email: 'pratik@gmail.com',
      experience: '1.0'
    }];
  }
  ngOnInit() { }
  addNewClick() {
    this.popup = true;
  }
  ramoveUser(ele: string) {
    console.log(ele);
    let index = this.userArr.findIndex((x) => x.name === ele);
    this.userArr.splice(index, 1);
  }
  onclick() {
    console.log(this.name);
    console.log(this.email);
    console.log(this.startdate);
    console.log(this.enddate);
    let date1 = new Date(String(this.startdate));
    let date2 = new Date(String(this.enddate));
    this.experience = date2.getTime() - date1.getTime();
    console.log((this.experience / (1000 * 3600 * 24) / 365).toFixed(1));
    let user1: user = {
      
      name: this.name,
      userid: this.count,
      email: this.email,
      experience: (this.experience / (1000 * 3600 * 24) / 365).toFixed(1)
    }
    this.userArr.push(user1);
      this.name = '';
      this.count = this.count++;
      this.email = '';
      this.experience = '';
      this.startdate = '';
      this.enddate = '';

    this.onCloseClick();
  }
  onCloseClick() {
    this.popup = false;
  }
}
