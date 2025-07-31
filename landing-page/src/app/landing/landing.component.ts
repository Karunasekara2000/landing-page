import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {

  speakers = [
    {
      name: 'Dr. Khalid Al Khatib',
      title: 'Director, AML Department, SAMA',
      img: 'assets/speaker1.jpg'
    },
    {
      name: 'Sarah Al-Farhan',
      title: 'Head of Compliance, Riyadh Bank',
      img: 'assets/speaker2.jpg'
    },
    // Add more speakers as needed
  ];
}
