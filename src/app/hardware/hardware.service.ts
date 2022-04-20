import { Injectable } from '@angular/core';
import {catchError, Observable, of, tap} from "rxjs";
import {Hardware} from "./hardware-model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  private hardwareUrl = 'http://localhost:8080/hardware';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor( private http: HttpClient) { }

  // getHardware(): Observable<Hardware[]>{
  //   return of(MockedHardwareList)
  // }

  getHardware(): Observable<Hardware[]> {

    return this.http.get<Hardware[]>(this.hardwareUrl)
      .pipe(

        tap(_  => console.log('fetched hardware')),
        catchError(this.handleError<Hardware[]>('getHardware', []))

      );
  }

  // getHardwareById(code: String){
  //   return MockedHardwareList.find( h => h.code === code)
  // }

  getHardwareByCode(code: string): Observable<Hardware>{

    const url = `${this.hardwareUrl}/${code}`;

    return this.http.get<Hardware>(url)
      .pipe(
        tap(_ => console.log(`fetched hardware with id = ${code}`)),
        catchError(this.handleError<Hardware>(`getHardwareByCode code=${code}`))
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
