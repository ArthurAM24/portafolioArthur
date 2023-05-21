import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.activateAppearEffect();
  }

  activateAppearEffect() {
    const items = this.elementRef.nativeElement.querySelectorAll('.item');

    items.forEach((item: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(item, 'appear');
      }, index * 200);
    });
  }
  downloadCV() {
    window.location.href = 'https://drive.google.com/file/d/1fV1khQUsyU8B5nW_soaqh6JMvCenQKzX/view';
  }
}
