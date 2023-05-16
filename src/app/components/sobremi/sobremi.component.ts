import {  Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements AfterViewInit {
  
  @ViewChild('script', { static: true })
  script!: ElementRef;

  ngOnInit() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'assets/js/script.js';
    this.script.nativeElement.appendChild(s);
  }

  ngAfterViewInit() {
    
    var typed= new Typed('.text',{
      strings:['Hola Soy Arthur.','Soy una persona apasionada por la programación.','Me gusta la informática y el diseño.','He realizado prácticas relacionadas con la informática, diseño web y programación.'
    ,'Me considero una persona responsable, creativa y puntual.','Tengo buen manejo de relaciones interpersonales y facilidad para trabajar en equipo.'],
      typeSpeed:50,
      backSpeed:20,
      backDelay:1500,
      loop:true
  });

  }

}
