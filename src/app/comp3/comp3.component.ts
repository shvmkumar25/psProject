import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

export interface Student {
  Serial_no:number;
  Name: string;
  Class: number;
  Section: string;
  Sub1: number;
  Sub2:number;
  Sub3:number;
}

const ELEMENT_DATA: Student[] = [
  {Serial_no: 1, Name: 'Student1', Class: 1, Section: 'A',Sub1:12,Sub2:23,Sub3:128},
  {Serial_no: 2, Name: 'Student2', Class: 2, Section: 'B',Sub1:22,Sub2:33,Sub3:120},
  {Serial_no: 3, Name: 'Student3', Class: 3, Section: 'C',Sub1:32,Sub2:63,Sub3:112},
  {Serial_no: 4, Name: 'Student4', Class: 4, Section: 'D',Sub1:42,Sub2:43,Sub3:120},
  {Serial_no: 5, Name: 'Student5', Class: 5, Section: 'E',Sub1:52,Sub2:73,Sub3:101},
  {Serial_no: 6, Name: 'Student6', Class: 6, Section: 'F',Sub1:62,Sub2:53,Sub3:129},
  {Serial_no: 7, Name: 'Student7', Class: 7, Section: 'A',Sub1:72,Sub2:73,Sub3:12},
  {Serial_no: 8, Name: 'Student8', Class: 8, Section: 'B',Sub1:82,Sub2:67,Sub3:172},
  {Serial_no: 9, Name: 'Student9', Class: 9, Section: 'C',Sub1:92,Sub2:67,Sub3:192},
  {Serial_no: 10, Name: 'Student10', Class: 10, Section: 'D',Sub1:12,Sub2:23,Sub3:34}
  
];
@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements AfterViewInit {

  displayedColumns:string[] ;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  constructor() {
     let k=Object.keys(ELEMENT_DATA[0])
     console.log(k);
     this.displayedColumns=k;
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  

}
