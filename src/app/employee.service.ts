import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    /**
     *  
     * @returns a employee Collection
     */
    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiBaseUrl}/employee/all`);
    }

    /**
    *  
    * @returns 
    */    
    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(`${this.apiBaseUrl}/employee/add`, employee);
    }

    /**
    *  
    * @returns 
    */    
     public updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiBaseUrl}/employee/update`, employee);
    }

    /**
    *  
    * @returns 
    */    
     public deleteEmployee(employeeId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiBaseUrl}/employee/delete/${employeeId}`);
    }


}