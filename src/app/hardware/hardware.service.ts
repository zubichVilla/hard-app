import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Hardware} from "./hardware-model";
import {MockedHardwareList} from "./mocked-hardware-list";

@Injectable({
  providedIn: 'root'
})
export class HardwareService {

  constructor() { }

  getHardware(): Observable<Hardware[]>{
    return of(MockedHardwareList)
  }
}
