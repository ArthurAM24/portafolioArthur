import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const parallaxElement = this.elementRef.nativeElement.querySelector('.parallax-element');
    if (!parallaxElement) return;

    parallaxElement.addEventListener('mousemove', (e: MouseEvent) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 75;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 75;
      parallaxElement.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    });
  }
}
