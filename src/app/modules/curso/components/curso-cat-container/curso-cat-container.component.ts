import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from '../../service/curso.service';
import { ICurso } from 'src/app/shared/interfaces/curso';

@Component({
  selector: 'app-curso-cat-container',
  templateUrl: './curso-cat-container.component.html',
  styleUrls: ['./curso-cat-container.component.css']
})
export class CursoCatContainerComponent implements OnInit {

  @Input() tipCat: number;

  listCursoCat: any[] = [];

  constructor(
    private wsCurso: CursoService
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso() {
    switch (this.tipCat) {
      case 1:
        this.getCUrsoAll();
        break;
      case 2:
        this.getCatCur(this.tipCat);
        break;
      default:
        break;
    }
  }

  private getCUrsoAll() {
    this.wsCurso.getTodosCursos()
      .subscribe((data: ICurso[]) => {
        console.log(data);
        this.listCursoCat = data;
      });
  }

  private getCatCur(tipcate: number) {
    this.wsCurso.getCursoCat((tipcate - 1))
    .subscribe((data: ICurso[]) => {
      console.log(data);

      this.listCursoCat = data;
    });
  }

}
