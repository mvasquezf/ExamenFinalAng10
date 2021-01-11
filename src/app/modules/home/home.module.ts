import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CursosDestacadoContainerComponent } from './components/cursos-destacado-container/cursos-destacado-container.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CursoComponent } from 'src/app/shared/components/curso/curso.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorService } from './services/instructor.service';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, CursosDestacadoContainerComponent,
    InstructorContainerComponent, InstructorComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [InstructorService]
})
export class HomeModule { }
