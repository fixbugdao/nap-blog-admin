import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable()
export class ArticleService {
  articles: FirebaseListObservable<Article[]> = null;
  article: FirebaseObjectObservable<Article> = null;

  constructor(private db: AngularFireDatabase) { }
  getAll(query = {}): FirebaseListObservable<Article[]> {
    this.articles = this.db.list('/artiles', {
      query: query
    });
    return this.articles;
  }

  get(key: string): FirebaseObjectObservable<Article> {
    const categoryPath = `/artiles/${key}`;
    this.article = this.db.object(categoryPath);
    return this.article;
  }

  create(article: Article) {
    article.createdDate = new Date().toString();
    if (article.published) {
      article.publishedDate = new Date().toString();
    }
    this.articles.push(article);
  }

  update(key: string, value: any) {
    this.articles.update(key, value)
      .catch(error => this.handleError(error));
  }

  delete(key: string) {
    this.articles.remove(key)
      .catch(error => this.handleError(error));
  }

  deleteAll() {
    this.articles.remove()
      .catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
