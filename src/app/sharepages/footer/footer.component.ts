import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  mostrarBotonArriba = false;
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.pageYOffset > 300) {
      this.mostrarBotonArriba = true;
    } else {
      this.mostrarBotonArriba = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
