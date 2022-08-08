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
    //getting the buttons
    var btnName = buttonID.el.textContent;
    //toolbar color in inappbrowser
    var barColor="#3880FF"
    
    if (btnName.includes(this.buttonInfos[0].title) === true) {
      Browser.open({ url: this.buttonInfos[0].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[1].title) === true) {
      Browser.open({ url: this.buttonInfos[1].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[2].title) === true) {
      Browser.open({ url: this.buttonInfos[2].url, toolbarColor: barColor });
    }
     else if (btnName.includes(this.buttonInfos[3].title) === true) {
      Browser.open({ url: this.buttonInfos[3].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[4].title) === true) {
      Browser.open({ url: this.buttonInfos[4].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[5].title) === true) {
      Browser.open({ url: this.buttonInfos[5].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[6].title) === true) {
      Browser.open({ url: this.buttonInfos[6].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[7].title) === true) {
      Browser.open({ url: this.buttonInfos[7].url, toolbarColor: barColor });
    } else if (btnName.includes(this.buttonInfos[8].title) === true) {
      Browser.open({ url: this.buttonInfos[8].url, toolbarColor: barColor });
    } else {
      Browser.open({ url: this.buttonInfos[0].url, toolbarColor: barColor });
    }
  }
  constructor() {}

  ngOnInit() {}
}
