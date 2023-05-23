import { Component, HostListener } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent {
  private hasActivatedEffect = false;

  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (!this.hasActivatedEffect) {
      this.activateWritingEffect();
    }
  }

  activateWritingEffect() {
    const typed = new Typed('.text', {
      strings: ['Hola Soy Arthur.', 'Diseñador Web.', 'Programador.'],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1500,
      loop: true
    });

    this.hasActivatedEffect = true;
  }
}

