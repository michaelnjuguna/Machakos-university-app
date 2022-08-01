import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  getTime() {
    let d = new Date().getHours();
    let greetings;
    if (d < 12) {
      greetings = 'Good Morning';
    } else if (d < 18) {
      greetings = 'Good afternoon';
    } else {
      greetings = 'Good Evening';
    }
    return greetings;
  }

  public appPages = [
    {
      title: 'More apps',
      url: 'https://play.google.com/store/apps/developer?id=michael+njuguna',
      icon: 'logo-google-playstore',
    },
    {
      title: 'About app',
      url: 'https://machakos-university-students-app.netlify.app/',
      icon: 'globe-sharp',
    },
    {
      title: '+254 735 247 939',
      url: 'tel:+254 735 247 939',
      icon: 'Call-sharp',
    },
    {
      title: '+254 795 207 117',
      url: 'tel:+254 795 207 117',
      icon: 'call-sharp',
    },
    { title: 'Complaints', url: 'tel:0769596233', icon: 'call-sharp' },
    { title: 'Home', url: 'www.mksu.ac.ke', icon: 'home-sharp' },
    { title: 'Developer', url: 'https://michael-njuguna-developer.netlify.app/', icon: 'code-slash-sharp' },
  ];
  public labels = [
    { title: 'Second Hand Goods', url: 'https://chat.whatsapp.com/C023vgOIUgLLebNDRQCevs' },
    { title: 'CU(2019 Group)',url:'https://chat.whatsapp.com/CyrOJwyRsi7BFz8pEaxhGd' },
    { title: 'CU brothers', url: 'https://chat.whatsapp.com/FuB8ibckWQcGe9IHdejFf4' },
    { title: 'KWAMU', url: 'https://chat.whatsapp.com/JwSHFoB37iw46w0CAdAOIo' },
  ];
  constructor() {}
}
