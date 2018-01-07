import { Category } from './category';
import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<Category[]> = null;
  category: FirebaseObjectObservable<Category> = null;

  constructor(private db: AngularFireDatabase) { }

  getAll(query = {}): FirebaseListObservable<Category[]> {
    this.categories = this.db.list('/categories', {
      query: query
    });
    return this.categories;
  }

  get(key: string): FirebaseObjectObservable<Category> {
    const categoryPath = `/categories/${key}`;
    this.category = this.db.object(categoryPath);
    return this.category;
  }

  create(category: Category) {
    this.categories.push(category);
  }

  update(key: string, value: any) {
    this.categories.update(key, value)
      .catch(error => this.handleError(error));
  }

  delete(key: string) {
    this.categories.remove(key)
      .catch(error => this.handleError(error));
  }

  deleteAll() {
    this.categories.remove()
      .catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
