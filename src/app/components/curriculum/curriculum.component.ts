import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent  {
   
  constructor() {}

  downloadCV() {
    const fileUrl = '../assets/pdf/CV_Arthur_Morales_2023.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV_Arthur_Morales_2023.pdf';
    link.click();
  }
}
