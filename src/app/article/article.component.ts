import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `<app-header [header]="header"></app-header>
  <router-outlet></router-outlet>`,
})
export class ArticleComponent {
  header = 'Articles';

  constructor() { }

}
