import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {
   
  constructor() {}

  downloadCV() {
    window.location.href = '../assets/pdf/CV_Arthur_Morales_2023.pdf';
  }
}