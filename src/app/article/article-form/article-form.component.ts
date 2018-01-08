import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Router } from '@angular/router';
import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
})
export class ArticleFormComponent implements OnInit {
  article = new Article;
  categories: FirebaseListObservable<Category[]>;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router) { }

  createArticle() {
    this.articleService.create(this.article);
    this.article = new Article();
  }

  onSubmit() {
    this.createArticle();
    this.router.navigate(['/articles/index']);
  }

  public ngOnInit(): void {
      this.categories = this.categoryService.getAll();
  }
}
