
import { Router } from '@angular/router';
import { EmployeeAPIService } from '../employeeAPIsevices/employee-api.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  employee:any = {}
  allemployee:any = []
  constructor( private api:EmployeeAPIService,private router:Router){}

  
  addemployee(){
    const existingUser = this.allemployee.find((item:any)=>item.id==this.employee.id)
    if(existingUser){
      alert("Id already exist!!! Use unique id to add user")
    }else{
      this.api.saveEmployeeAPI(this.employee).subscribe({
        next:(result:any)=>{
          console.log(result);
          alert(`${result.name} has successfully added to our DB`)
          this.router.navigateByUrl('/')
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }

  }
  cancel(){
    this.employee={}
  }
}
