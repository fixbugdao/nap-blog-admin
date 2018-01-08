import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
})
export class CategoryFormComponent {
  category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) { }

  createCategory() {
    this.categoryService.create(this.category);
    this.category = new Category();
  }

  onSubmit() {
    this.createCategory();
    this.router.navigate(['/categories/index']);
  }

}
