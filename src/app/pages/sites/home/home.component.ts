import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  opened : boolean = false;
  opened1 : boolean = false


  constructor() { }

  ngOnInit(): void {
  }

  Hover(){
    this.opened = true;
   
  }

  exitHover(){
    this.opened = false;
  }

}
