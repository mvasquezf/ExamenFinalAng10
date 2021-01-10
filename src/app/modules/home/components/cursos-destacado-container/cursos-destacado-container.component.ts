import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos-destacado-container',
  templateUrl: './cursos-destacado-container.component.html',
  styleUrls: ['./cursos-destacado-container.component.css']
})
export class CursosDestacadoContainerComponent implements OnInit {

  listCursoDestacado: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
