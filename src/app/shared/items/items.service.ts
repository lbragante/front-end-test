import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Item } from './Item';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  url = 'https://5cfa67ebf26e8c00146d0756.mockapi.io';

  constructor(private http: HttpClient) { }

  // inserir um item em uma lista
  insertItem(item: Item, idCategory: string, idList: string): Observable<Item> {
    return this.http.post<Item>(`${this.url}/categories/${idCategory}/lists/${idList}/items`, item);
  }

  // listar os itens de uma lista
  getAllItems(idCategory: string, idList: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.url}/categories/${idCategory}/lists/${idList}/items`)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // atualizar um item da lista como 'feito'

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
