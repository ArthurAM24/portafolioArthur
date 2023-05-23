import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {

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
    const items = this.elementRef.nativeElement.querySelectorAll('.item');

    items.forEach((item: HTMLElement, index: number) => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        this.renderer.addClass(item, 'appear');
      }
    });
  }
  downloadCV() {
    window.location.href = 'https://drive.google.com/file/d/1fV1khQUsyU8B5nW_soaqh6JMvCenQKzX/view';
  }
}
