import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Category } from './Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  url = 'https://5cfa67ebf26e8c00146d0756.mockapi.io';

  constructor(private http: HttpClient) { }

  // listar categorias
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/categories`)
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
