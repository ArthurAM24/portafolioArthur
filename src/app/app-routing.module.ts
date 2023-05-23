import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';

const routes: Routes = [

  {path:'',component:InicioComponent,pathMatch:'full'},
  {path:'sobremi',component:SobremiComponent},
  {path:'skills',component:SkillsComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'portafolio',component:PortafolioComponent},
  {path:'curriculum',component:CurriculumComponent},
  {path:'**',pathMatch:'full',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
