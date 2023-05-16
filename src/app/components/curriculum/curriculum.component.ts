import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent  {
   
  constructor() {}

  downloadCV() {
    window.location.href = 'https://drive.google.com/file/d/1fV1khQUsyU8B5nW_soaqh6JMvCenQKzX/view';
  }
}
