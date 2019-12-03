import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ListInsertComponent } from './list-insert/list-insert.component';


const routes: Routes = [
  { path: '', redirectTo: 'list/insert', pathMatch: 'full' },
  {
    path: '', component: NavbarComponent,
    children: [
      { path: 'categories', component: CategoriesComponent },
      { path: 'list/insert', component: ListInsertComponent },
    ],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
