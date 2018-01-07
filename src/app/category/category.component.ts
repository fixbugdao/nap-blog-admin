import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `<app-header [header]="header"></app-header>
  <router-outlet></router-outlet>`,
})
export class CategoryComponent {
  header = 'Categories';

  constructor() { }

}
