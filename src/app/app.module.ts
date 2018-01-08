import { ArticleService } from './article/article.service';
import { CategoryService } from './category/category.service';
import { AuthService } from './auth/auth.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth/auth.guard';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { CategoriesListComponent } from './category/categories-list/categories-list.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './article/articles-list/articles-list.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginLayoutComponent,
    AdminLayoutComponent,
    CategoryComponent,
    CategoriesListComponent,
    CategoryFormComponent,
    ArticleComponent,
    ArticlesListComponent,
    ArticleFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    CategoryService,
    ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
