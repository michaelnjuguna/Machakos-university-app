import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  getTime(){
    let d = new Date().getHours();
    let greetings;
    if(d<12){
      greetings = "Good Morning";
    }else if(d<18){
      greetings = "Good afternoon"
    }else{
      greetings = "Good Evening"
    }
   return greetings;
  }
  
  public appPages = [
    { title: 'More apps', url: 'https://play.google.com/store/apps/developer?id=michael+njuguna', icon: 'logo-google-playstore' },
    { title: 'About app', url: 'https://machakos-university-students-app.netlify.app/', icon: 'globe-sharp' },
    { title: '+254 735 247 939', url: 'tel:+254 735 247 939', icon: 'Call-sharp' },
    { title: '+254 795 207 117', url: 'tel:+254 795 207 117', icon: 'call-sharp' },
    { title: 'Complaints', url: 'tel:0769596233', icon: 'call-sharp' },
    { title: 'Home', url: 'www.mksu.ac.ke', icon: 'home-sharp' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
