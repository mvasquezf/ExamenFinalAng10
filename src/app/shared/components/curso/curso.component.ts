import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../interfaces/curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() curso: ICurso;
  @Input() coverWitdh: number;

  constructor() {

  }

  ngOnInit(): void {

  }

}
