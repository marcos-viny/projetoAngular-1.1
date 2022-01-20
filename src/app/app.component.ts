import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor() {window.addEventListener('scroll', this.handleScroll)};

  ngOnInit(): void{}


  handleScroll(){
    const animationClass = "animate";
     const allSubMenus = document.querySelectorAll("[data-anima]");
     const windowTop = window.pageYOffset + window.innerHeight * 0.75;
     for(const sub of allSubMenus as any){
       if(windowTop > sub.offsetTop){
        sub.classList.add(animationClass);
     }
     }   
  }
};
