import { CategoryService } from './../../category/category.service';
import { ArticleService } from '../article.service';
import { Category } from '../../category/category';
import { Article } from '../article';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styles: []
})
export class ArticleEditComponent implements OnInit {
  @Input() article: Article;
  categories: Category[];

  constructor(
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.getCategories();
    this.getArticle();
  }

  getCategories(): void {
    this.categoryService.getAll()
      .subscribe(categories => this.categories = categories);
  }

  getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleService.get(id)
      .subscribe(article => this.article = article);
  }

  updateArticle(id: string) {
    this.articleService.update(id, this.article);
    this.location.back();
  }

  public generateSlug(): void {
    let slug = this.article.title.toLowerCase().trim();
    slug = slug.replace(/[^a-z0-9\s-]/g, ' ');
    slug = slug.replace(/[\s-]+/g, '-');
    this.article.slug = slug;
  }

}
