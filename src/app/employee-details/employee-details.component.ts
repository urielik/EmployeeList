import { Component, OnInit, Input } from '@angular/core';
import { employee } from '../models/Employee'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: employee;

  constructor() { }

  ngOnInit() {
  }

}
