import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee';


@Injectable()
export class EmployeeService {
  private url = "https://fathomless-sands-38649.herokuapp.com";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/employees');
  }

  getEmployee(id): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url + '/employee-raw/' + id);
  }

  saveEmployee(employee: Employee): Observable<any>{
    return this.http.put<any>(this.url + '/employee/', employee._id);
  }

}
