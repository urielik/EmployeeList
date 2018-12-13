import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from '../models/Employee';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private  http:HttpClient) { }


getData(): Observable<employee>
{
  return this.http.get<employee>('http://localhost:4200/assets/mock/employee.json');
}
}
