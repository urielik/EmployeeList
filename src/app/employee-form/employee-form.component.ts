import { Component, OnInit } from '@angular/core';
import { employee } from '../models/Employee';
import { NgForm } from '@angular/forms'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyService } from '../my-service.service';

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

  //public data: employee;
  public name:string;
  public age:number;
  public gender:string; 

 constructor() { }

//  public constructor(private myService:MyService) {
//   this.myService.myMethod(this.name);
// }

  ngOnInit() {
  }

  // on click Submit button 
  onSubmit(form:NgForm ) {
    alert(this.name + " " + this.age + " " + this.gender);
  }

  
}
