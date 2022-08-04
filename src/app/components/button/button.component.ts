import { Component, OnInit } from '@angular/core';
//import in app browser plugin from capacitor
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  //button information
  public buttonInfos = [
    {
      title: 'Portal',
      icon: 'person-circle-sharp',
      url: 'http://portal.mksu.ac.ke/login/sign-in',
    },
    {
      title: 'Exam bank',
      icon: 'document-sharp',
      url: 'http://ir.mksu.ac.ke/handle/123456780/187',
    },
    {
      title: 'E-Learning LMS',
      icon: 'phone-portrait-sharp',
      url: 'https://elearning.mksu.ac.ke/mksu.lms/',
    },
    {
      title: 'University news',
      icon: 'newspaper-sharp',
      url: 'https://www.mksu.ac.ke/blog-medium/',
    },
    {
      title: 'Upcoming events',
      icon: 'calendar-sharp',
      url: 'https://www.mksu.ac.ke/upcoming-events/',
    },
    {
      title: 'GSSP Fees Structures',
      icon: 'wallet-sharp',
      url: 'https://www.mksu.ac.ke/feesstructures2019/',
    },
    {
      title: 'PSSP Fees Structures',
      icon: 'wallet-sharp',
      url: 'https://www.mksu.ac.ke/notices/fee-structures-undergraduate-pssp-students/',
    },
    {
      title: 'TVET Fees Structures',
      icon: 'wallet-sharp',
      url: 'https://www.mksu.ac.ke/tvet-fee-structures/',
    },
    {
      title: 'Postgraduate Fees Structures',
      icon: 'wallet-sharp',
      url: 'https://www.mksu.ac.ke/postgraduate-fees/',
    },
  ];

  //open url in browser
  openLink(buttonID) {
    var btnName = buttonID.el.textContent;
    if (btnName.includes('Portal') === true) {
      Browser.open({ url: this.buttonInfos[0].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('Exam bank') === true) {
      Browser.open({ url: this.buttonInfos[1].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('E-Learning LMS') === true) {
      Browser.open({ url: this.buttonInfos[2].url, toolbarColor: '#3880FF' });
    }
     else if (btnName.includes('University news') === true) {
      Browser.open({ url: this.buttonInfos[3].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('Upcoming events') === true) {
      Browser.open({ url: this.buttonInfos[4].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('GSSP Fees Structures') === true) {
      Browser.open({ url: this.buttonInfos[5].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('PSSP Fees Structures') === true) {
      Browser.open({ url: this.buttonInfos[6].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('TVET Fees Structures') === true) {
      Browser.open({ url: this.buttonInfos[7].url, toolbarColor: '#3880FF' });
    } else if (btnName.includes('Postgraduate Fees Structures') === true) {
      Browser.open({ url: this.buttonInfos[8].url, toolbarColor: '#3880FF' });
    } else {
      Browser.open({ url: this.buttonInfos[0].url, toolbarColor: '#3880FF' });
    }
  }
  constructor() {}

  ngOnInit() {}
}
