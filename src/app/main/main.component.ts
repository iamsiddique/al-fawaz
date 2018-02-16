import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
test = function(){
  alert('hi');
}
  ngOnInit() {
    
   // this.test();
  }
  ngAfterContentInit() {
    document.getElementById("video").play();
    console.log('loaded');
  }

}
