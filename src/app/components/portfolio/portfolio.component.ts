import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.activateAppearEffect();
  }

  activateAppearEffect() {
    const proyectos = this.elementRef.nativeElement.querySelectorAll('.proyecto1, .proyecto2, .proyecto3');
  
    proyectos.forEach((proyecto: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(proyecto, 'appear');
      }, index * 200);
    });
  }
}
