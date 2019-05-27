import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@example.com',
      phoneNumber: 1234567890,
      contactPreference: 'Email',
      dateofBirth: new Date(10/25/1918),
      isActive: true,
      photoPath: 'assets/images/mark.jpg'
    },
    {
      id: 2,
      name: 'Suraj',
      gender: 'Male',
      email: 'suraj@example.com',
      phoneNumber: 1234567890,
      contactPreference: 'Email',
      dateofBirth: new Date(10/25/1997),
      isActive: true,
      photoPath: 'assets/images/suraj.jpg'
    },
    {
      id: 3,
      name: 'Sunil',
      gender: 'Male',
      email: 'sunil@example.com',
      phoneNumber: 1234567890,
      contactPreference: 'Email',
      dateofBirth: new Date(10/25/1994),
      isActive: true,
      photoPath: 'assets/images/sunil.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
