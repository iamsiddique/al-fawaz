import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;

  constructor() { }
test = function(){
  alert('hi');
}
  ngOnInit() {
    
    // setTimeout(function(){ 
      
    // }, 5000);
    
   // this.test();
  }
  ngAfterContentInit() {
   // document.getElementById("video").play();
    console.log('loaded');
    //this.videoplayer.nativeElement.play(); 
  }

}
