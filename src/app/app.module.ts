import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent,
    PortafolioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
