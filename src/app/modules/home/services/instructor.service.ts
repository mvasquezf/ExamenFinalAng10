import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInstructor } from '../interfaces/instructor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(
    private http: HttpClient
  ) { }

  getInstructor() {
    return this.http.get<IInstructor[]>(`${environment.urlApiInstructor}`);
  }

}
