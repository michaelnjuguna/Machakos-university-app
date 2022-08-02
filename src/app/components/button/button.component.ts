import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
//button information
public buttonInfos=[
  {title:'Portal',icon:'person-circle-sharp',url:'http://portal.mksu.ac.ke/login/sign-in'},
  {title:'Exam bank',icon:'document-sharp',url:'http://ir.mksu.ac.ke/handle/123456780/187'},
  {title:'E-Learning LMS',icon:'phone-portrait-sharp',url:'https://elearning.mksu.ac.ke/mksu.lms/'},
  {title:'University news',icon:'newspaper-sharp',url:'https://www.mksu.ac.ke/blog-medium/'},
  {title:'Upcoming events',icon:'calendar-sharp',url:'https://www.mksu.ac.ke/upcoming-events/'},
  {title:'GSSP Fees Structures',icon:'wallet-sharp',url:'https://www.mksu.ac.ke/feesstructures2019/'},
  {title:'PSSP Fees Structures',icon:'wallet-sharp',url:'https://www.mksu.ac.ke/notices/fee-structures-undergraduate-pssp-students/'},
  {title:'TVET Fees Structures',icon:'wallet-sharp',url:'https://www.mksu.ac.ke/tvet-fee-structures/'},
  {title:'Postgraduate Fees Structures',icon:'wallet-sharp',url:'https://www.mksu.ac.ke/postgraduate-fees/'},
]
  constructor() { }

  ngOnInit() {}

}
