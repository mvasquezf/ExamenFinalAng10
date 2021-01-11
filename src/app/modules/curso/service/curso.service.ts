import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from 'src/app/shared/interfaces/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor( private http: HttpClient) { }

  getTodosCursos() {
    return this.http.get<ICurso[]>(`${environment.urlApiCursos}`);
  }

  getCursoCat(tipCat: number) {
    return this.http.get<ICurso[]>(`${environment.urlApiCursoCat}${tipCat}`);
  }

}
