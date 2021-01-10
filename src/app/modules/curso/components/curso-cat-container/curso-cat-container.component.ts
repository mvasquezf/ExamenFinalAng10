import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-cat-container',
  templateUrl: './curso-cat-container.component.html',
  styleUrls: ['./curso-cat-container.component.css']
})
export class CursoCatContainerComponent implements OnInit {

  listCursoCat: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
