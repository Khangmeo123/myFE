import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-profile',
  templateUrl: './your-profile.component.html',
  styleUrls: ['./your-profile.component.scss']
})
export class YourProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  user = {
    fullName: "Đinh Minh Khang", dob:"23/11/1999", gender:"nam",email:"minhkhang231199@gmail.com",numberPhone:"0929076099"
  }
}
