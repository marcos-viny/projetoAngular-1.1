import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  @Input() comp:any;

  opened : boolean = false;
  opened_2 : boolean = false;

  constructor() { window.addEventListener('mousemove', this.mouseMove) }

  ngOnInit(): void {
  }


  Hover(){
    this.opened = true;
  };
  exitHover(){
    this.opened = false;  
  };



  mouseMove(e:any){
    const title_1 = document.querySelector(".title-1");
    const title_2 = document.querySelector(".title-2");

    title_1?.setAttribute(
      "style",
      "top :" + (e.pageY - 350) + "px; left: " + (e.pageX - 115) + "px"
    ),

    title_2?.setAttribute(
      "style",
      "top :" + (e.pageY - 350) + "px; left: " + (e.pageX - 115) + "px"
    );
  }

}
