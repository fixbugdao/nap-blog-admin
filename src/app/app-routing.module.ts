import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { ArticlesListComponent } from './article/articles-list/articles-list.component';
import { CategoryComponent } from './category/category.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'categories',
        component: CategoryComponent,
        children: [
          { path: 'index', component: CategoriesListComponent },
          { path: 'create', component: CategoryFormComponent }
        ]
      },
      {
        path: 'articles',
        component: ArticleComponent,
        children: [
          { path: 'index', component: ArticlesListComponent },
          { path: 'create', component: ArticleCreateComponent },
          { path: 'edit/:id', component: ArticleEditComponent },
        ]
      }
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
