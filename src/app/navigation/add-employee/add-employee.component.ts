import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormsModule,ReactiveFormsModule,NgForm} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { process, State } from '@progress/kendo-data-query';
import {
  GridComponent,
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';
const distinct = data => data
    .map(x => x.department)
    .filter((x, idx, xs) => xs.findIndex(y => y.departmentname === x.departmentname) === idx);
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;
 
  public value: Date = new Date();
  public autoCorrect: boolean = false;
  // /public value1: number = 5;
  suc :boolean = false;
   employeeData: any[] = [{
    fname:"maged ahmed",
    department:"Development"
    ,
    code: 11,
    birthday:new Date(29-9-1989),
    gender:"male"
  },
    {
      fname: "mahmoud ali",
      department:"sales"
       ,
      code: 15,
      birthday: new Date(12-3-1995),
      gender: "male"
    },
    {
      fname: "manal ibrahim",
      department:"Engineering"
      
      ,
      code: 112,
      birthday: new Date(9-3-1992),
      gender: "female"
    },
    {
      fname: "samar mohamed",
      department:"Technical Support"
      ,
      code: 143,
      birthday: new Date(21-5-1994),
      gender: "female"
    },
    {
      fname: "Finance",
      department:"Finance",
        departmentid:5
      ,
      code: 143,
      birthday: new Date(21-5-1994),
      gender: "female"
    }
    ];
  public allowCustom: boolean = true;
  public listItems: Array<string> =
   ["Development","sales", "Engineering", "Technical Support", "Finance"];
  //  public listItems1:any[] =[{
  //   departmentname:"Development",
  //   departmentid:3},
  // {
  //   departmentname:"Development",
  //   departmentid:3 
  // }
  // ];
   public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: [{ field: 'name', operator: 'contains', value: '' }]
    }
};

public gridData: GridDataResult = process(this.employeeData, this.state);

public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
     this.gridData = process(this.employeeData, this.state);
};
public distinctCategories: any[] = distinct(this.employeeData);
//  public gridData: any[] = this.employeeData;
   constructor() {

   }
  ngOnInit() {
  }
  registerUser() {
    this.employeeData.push(this.registerForm.value);
    console.log( this.employeeData);
   this.suc=true;
    this.registerForm.reset();
  }

}
