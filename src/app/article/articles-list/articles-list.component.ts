import { ArticleService } from './../article.service';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
})
export class ArticlesListComponent implements OnInit {
  public articles: FirebaseListObservable<Article[]>;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articles = this.articleService.getAll();
  }

  updatePublished($key: string, published: boolean) {
    this.articleService.update($key, {published: published});
  }

  deleteArticle($key: string) {
    this.articleService.delete($key);
  }

}
