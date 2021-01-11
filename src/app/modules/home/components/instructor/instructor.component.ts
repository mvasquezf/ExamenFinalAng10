import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../../interfaces/instructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  @Input() instructor: IInstructor;
  @Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
  }

}
