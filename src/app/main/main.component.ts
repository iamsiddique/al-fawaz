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
    this.videoplayer.nativeElement.play();
   // this.test();
  }
  ngAfterContentInit() {
   // document.getElementById("video").play();
    console.log('loaded');
  }

}
