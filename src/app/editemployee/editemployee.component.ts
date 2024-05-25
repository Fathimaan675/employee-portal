import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeAPIService } from '../employeeAPIsevices/employee-api.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent {
  
  employee: any = {};
 constructor( private route:ActivatedRoute, private api:EmployeeAPIService ,private router:Router) {}
 ngOnInit(): void {
   this.route.params.subscribe((result:any)=>{
    console.log(result);
    const {id}=result
    console.log(id);
     this.getuserDetails(id) 
    
   })
 }
getuserDetails(id:any){
  this.api.getAemployeeAPI(id).subscribe((result:any)=>{
    this.employee=result
    console.log(this.employee);
    
  })
}
cancel(id:any){
  this.getuserDetails(id)

}
updateemployee(){
  this.api.updateemployeeAPI(this.employee).subscribe((result:any)=>{
alert("Employee updated successfully")
this.router.navigateByUrl('/')
  })
}
}
