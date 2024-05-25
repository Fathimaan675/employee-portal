import { Component,OnInit  } from '@angular/core';
import { EmployeeAPIService } from '../employeeAPIsevices/employee-api.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit  {
  allemployee: any = [];

  constructor(private api: EmployeeAPIService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.api.getallemployeeAPI().subscribe({
      next: (result: any) => {
        this.allemployee = result;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
  deleteuser(id:any){
    this.api.deleteUserAPI(id).subscribe((result:any)=>{
      this.loadEmployees()
    })
  
  }
 
}
