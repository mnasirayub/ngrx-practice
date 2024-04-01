import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SingleEmployeeModel } from '../models/employeesModel';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<SingleEmployeeModel[]> {
    return this.http.get<SingleEmployeeModel[]>('http://localhost:3000/employees');
  }

  onAddEmployee(employee: SingleEmployeeModel) {
    return this.http.post<SingleEmployeeModel>('http://localhost:3000/employees', employee).pipe(
      tap(() => {
        this.http.get<SingleEmployeeModel>('http://localhost:3000/employees?_limit=1&_sort=id&_order=desc');
      })
    );
  }

  onChangeEmployeeStatus(empId: string, empData:SingleEmployeeModel) {
    return this.http.put<SingleEmployeeModel>('http://localhost:3000/employees/' + empData?.id, empData);
  }
}
