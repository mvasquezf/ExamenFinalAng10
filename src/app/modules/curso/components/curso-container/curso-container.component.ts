import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-container',
  templateUrl: './curso-container.component.html',
  styleUrls: ['./curso-container.component.css']
})
export class CursoContainerComponent implements OnInit {

  listCurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
