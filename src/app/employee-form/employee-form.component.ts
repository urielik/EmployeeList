import { Component, OnInit } from '@angular/core';
import { employee } from '../models/Employee';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  sex: string[] = [
    'זכר',
    'נקבה',
  ]

  data: employee;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form:NgForm ) { 
    alert("Hello "  + JSON.stringify(form.value));
  }
}
