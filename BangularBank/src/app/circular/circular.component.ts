import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happyText = "Mananger on leave";

  public myTodos = [
    'take vitamins',
    'take shower',
    'say hi to new hire'
  ];
  
  constructor() { }

  ngOnInit() {
    this.happyText = 'Manager is sick';
  }

  makeHappier(){
    this.happyText = 'Manager got fired';
  }

}
