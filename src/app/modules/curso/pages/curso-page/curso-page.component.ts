import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-page',
  templateUrl: './curso-page.component.html',
  styleUrls: ['./curso-page.component.css']
})
export class CursoPageComponent implements OnInit {

  tipCat = 1;

  constructor() { }

  ngOnInit(): void {
  }

  clickTodasCat() {
    this.tipCat = 1;
  }

  clickCatDiseno() {
    this.tipCat = 2;
  }

  clickCatDesarrollo() {
    this.tipCat = 3;
  }

  clickCatTi() {
    this.tipCat = 4;
  }

}
