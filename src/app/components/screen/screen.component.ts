import { Component, OnInit } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
    

  constructor() {
    //status bar settings
    StatusBar.setStyle({ style: Style.Default });
    StatusBar.setOverlaysWebView({ overlay: false });
    StatusBar.setBackgroundColor({color:'#3880FF'});
    
  }

  ngOnInit() {}
  
}
