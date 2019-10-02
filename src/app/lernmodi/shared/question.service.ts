import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, filter, map, flatMap, mergeMap } from 'rxjs/operators';

import { Question } from './question';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {

  private api = 'http://localhost:3000';
  private errorHandler(error: HttpErrorResponse): Observable<any> {
      console.error('Fehler aufgetreten!');
      return throwError(error);
      }
      questions$ : Observable<Question[]>;
   //   questions2: Question[];
  
  constructor(private http: HttpClient) { }
             
  getAll(): Observable<Question[]> {
  
  return this.http.get<Question[]>(`${this.api}/questions`);

      }
}
//pipe(map(res => res.filter(item => item.qType==1)),