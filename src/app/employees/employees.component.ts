import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/employee';
import { EmployeeService } from '../data/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  filteredEmployees: Employee[];
  getEmployeesSub: any;

  constructor(
    private e: EmployeeService, 
    private r: Router
  ) {}

  ngOnInit(){
    
    this.getEmployeesSub = this.e.getEmployees().subscribe(employees => this.employees = employees);
    
  }

  ngOnDestroy(){
    if(this.getEmployeesSub != undefined)
      this.getEmployeesSub.unsubscribe();
  }

  routeEmployee(id:string){
    this.r.navigate(['/employee', id]);
  }
  
  onEmployeeSearchKeyUp(event: any){
    this.filteredEmployees = this.employees.filter(event.target.value);
  }
 
  

}
