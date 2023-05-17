import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SkillsComponent } from './components/skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobremiComponent,
    SkillsComponent,
    CurriculumComponent,
    PortfolioComponent,
    ContactoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
