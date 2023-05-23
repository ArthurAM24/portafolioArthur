import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor() {}
  private lastScrollPosition = 0;
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(currentScrollPosition - this.lastScrollPosition) >= 50) {
      this.lastScrollPosition = currentScrollPosition;
      this.efectoHabilidades();
    }
  }

  efectoHabilidades() {
    const skills = document.getElementById("skills");
    if (skills) {
      const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
      if (distancia_skills >= 100) {
        const habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("cshard");
        habilidades[3].classList.add("c");
        habilidades[4].classList.add("firebase");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("sqlserver");
        habilidades[7].classList.add("mariadb");
        habilidades[8].classList.add("javaspring");
        habilidades[9].classList.add("angular");
        habilidades[10].classList.add("laravel");
        habilidades[11].classList.add("eclipse");
        habilidades[12].classList.add("intellij");
        habilidades[13].classList.add("javaScript");
        habilidades[14].classList.add("html");
        habilidades[15].classList.add("css");
        habilidades[16].classList.add("apirest");
        habilidades[17].classList.add("jpa");
        habilidades[18].classList.add("windows");
        habilidades[19].classList.add("linux");
        habilidades[20].classList.add("scrum");
        habilidades[21].classList.add("cascada");
        habilidades[22].classList.add("diseno");
        habilidades[23].classList.add("redes");
        habilidades[24].classList.add("ofimatica");
        habilidades[25].classList.add("disenosis");
        habilidades[26].classList.add("informatica");
        habilidades[27].classList.add("poo");
        habilidades[28].classList.add("arduino");
        habilidades[29].classList.add("spframe");
        habilidades[30].classList.add("android");
        habilidades[31].classList.add("google");
        habilidades[32].classList.add("docker");
        habilidades[33].classList.add("wordpress");
      }
    }
  }
}
