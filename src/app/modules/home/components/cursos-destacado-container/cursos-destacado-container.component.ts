import { Component, OnInit } from '@angular/core';
import { CursoDestacadoService } from '../../services/curso-destacado.service';
import { ICurso } from 'src/app/shared/interfaces/curso';

@Component({
  selector: 'app-cursos-destacado-container',
  templateUrl: './cursos-destacado-container.component.html',
  styleUrls: ['./cursos-destacado-container.component.css']
})
export class CursosDestacadoContainerComponent implements OnInit {

  listCursoDestacado: ICurso[] = [];

  constructor(
    private wsCursoDestacado: CursoDestacadoService
  ) { }

  ngOnInit(): void {
    this.getCursoDestacado();
  }

  getCursoDestacado() {
    this.wsCursoDestacado.getCursoDestacado()
      .subscribe((data: ICurso[]) => {
        this.listCursoDestacado = data;
      });
  }

}
