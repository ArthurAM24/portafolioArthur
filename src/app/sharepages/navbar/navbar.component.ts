import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  hideItems() {
    const navbarCollapse = document.getElementById('navbarNavDropdown');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
}
