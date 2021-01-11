import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from 'src/app/shared/interfaces/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoDestacadoService {

  constructor( private http: HttpClient) { }

  getCursoDestacado() {
    return this.http.get<ICurso[]>(`${environment.urlApiCursoDestacado}`);
  }

}
