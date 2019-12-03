import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../shared/categories/Category';
import { List } from '../shared/lists/List';
import { CategoriesService } from '../shared/categories/categories.service';
import { ListsService } from '../shared/lists/lists.service';

@Component({
  selector: 'app-list-insert',
  templateUrl: './list-insert.component.html',
  styleUrls: ['./list-insert.component.scss']
})
export class ListInsertComponent implements OnInit {

  list: List = {
    itemId: '',
    name: ''
  };

  categoriesObs$: Observable<Category[]>;

  constructor(
    private categoriesService: CategoriesService,
    private listsService: ListsService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoriesObs$ = this.categoriesService.getAllCategories();
  }

  saveList() {
    console.log(this.list);
    this.listsService.insertList(this.list);
  }

}
