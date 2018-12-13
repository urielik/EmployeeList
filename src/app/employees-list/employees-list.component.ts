import { Component, OnInit } from '@angular/core';
import { employee } from '../models/Employee';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employee : employee;
  selectedEmployee: employee;

  constructor(private data: DataService) {
    // get data from json file
    this.data.getData().subscribe(data =>{
      console.log(data);
      this.employee = data;
    });
   }

  ngOnInit() {
  }

  // click event on select employee from the list
  onSelect(employee: employee): void {
    this.selectedEmployee = employee;
  }

  addEmployee(): void {
  }

}
