import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-view',
  templateUrl: './error-view.component.html',
  styles: [
    `
    .background {
      width: 100%;
      height: 100vh;
      background-size: cover;
      background-image: url(../../../assets/404.jpg)
    } 
    .button {
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-content: center;
      justify-content: center
    }
    .link {
      font-size: xx-large;
      text-decoration: none;
      color: white;
    }
    `
  ]
})
export class ErrorViewComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
