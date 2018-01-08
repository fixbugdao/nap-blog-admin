import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Category } from '../../category/category';
import { Article } from '../article';
import { CategoryService } from '../../category/category.service';
import { ArticleService } from '../article.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styles: []
})
export class ArticleCreateComponent implements OnInit {
  article = new Article();
  categories: FirebaseListObservable<Category[]>;

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private location: Location) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getAll();
  }

  createArticle() {
    this.articleService.create(this.article);
    this.article = new Article();
  }

  onSubmit() {
    this.createArticle();
    this.location.back();
  }

  public generateSlug(): void {
    let slug = this.article.title.toLowerCase().trim();
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
    slug = slug.replace(/[\s-]+/g, '-');
    this.article.slug = slug;
  }

}
