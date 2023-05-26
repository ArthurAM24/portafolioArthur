import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent {
  private lastScrollPosition = 0;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(currentScrollPosition - this.lastScrollPosition) >= 50) {
      this.lastScrollPosition = currentScrollPosition;
      this.activateAppearEffect();
    }
  }

  activateAppearEffect() {
    const proyectos = this.elementRef.nativeElement.querySelectorAll('.proyecto1, .proyecto2, .proyecto3, .proyecto4');

    proyectos.forEach((proyecto: HTMLElement, index: number) => {
      const rect = proyecto.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        setTimeout(() => {
          this.renderer.addClass(proyecto, 'appear');
        }, index * 200);
      }
    });
  }
}
