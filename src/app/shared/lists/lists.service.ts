import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { List } from './List';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  url = 'https://5cfa67ebf26e8c00146d0756.mockapi.io';

  constructor(private http: HttpClient) { }

  // inserir uma lista em uma categoria
  insertList(list: List): Observable<List> {
    list = {
      itemId: list.itemId,
      name: list.name
    };
    console.log(list);
    return this.http.post<List>(`${this.url}/categories/${list.itemId}/lists`, list);
  }

  // listar as listas de uma categoria
  getAllLists(idCategory: string): Observable<List[]> {
    return this.http.get<List[]>(`${this.url}/categories/19/lists`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
