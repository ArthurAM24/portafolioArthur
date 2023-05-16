import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [

  {
    path:"",component:HomeComponent
  },

  {
    path:"sobremi",component:SobremiComponent
  },

  {
    path:"skills",component:SkillsComponent
  },
  
  {
    path:"curriculum",component:CurriculumComponent
  },

  {
    path:"portfolio",component:PortfolioComponent
  },

  {
    path:"contacto",component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
