import { CategoryService } from './../category.service';
import { Category } from './../category';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  public categories: FirebaseListObservable<Category[]>;

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getAll();
  }

  updateActive($key: string, isActive: boolean) {
    this.categoryService.update($key, {active: isActive});
  }

  deleteCategory($key: string) {
    this.categoryService.delete($key);
  }

}
