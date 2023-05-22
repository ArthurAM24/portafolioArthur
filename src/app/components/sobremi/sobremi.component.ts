import {  Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.scss']
})
export class SobremiComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit() {
    this.efectoescritura();
  }

  efectoescritura(){
    var typed= new Typed('.text',{
      strings:['Hola Soy Arthur.','Diseñador Web.'
    ,'Programador.'],
      typeSpeed:50,
      backSpeed:20,
      backDelay:1500,
      loop:true
  });
  }

}
