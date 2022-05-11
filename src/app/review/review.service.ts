import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Review} from "./review-model";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private reviewUrl = 'http://localhost:8080/review';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {
    return  this.http.get<Review[]>(this.reviewUrl)
      .pipe(
        tap(_ => console.log('fetched reviews')),
        catchError(this.handleError<Review[]>('getReviews', []))
      )
  }

  getReviewsByHardwareCode(code: String): Observable<Review[]>{

    const url = `${this.reviewUrl}?code=${code}`;

    return this.http.get<Review[]>(url)
      .pipe(
        tap(_ => console.log(`fetched reviews hardware code=${code}`)),
        catchError(this.handleError<Review[]>(`getReviews code=${code}`, []))
      );

  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
