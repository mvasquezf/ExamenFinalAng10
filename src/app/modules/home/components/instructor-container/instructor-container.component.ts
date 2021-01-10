import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.css']
})
export class InstructorContainerComponent implements OnInit {

  lisInstuctor: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
