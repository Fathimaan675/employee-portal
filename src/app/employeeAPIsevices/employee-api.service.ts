import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAPIService {
  server_url="https://employeeserver-ra68.onrender.com"

  constructor( private   http: HttpClient) { }
  saveEmployeeAPI(employee:any){
    return this.http.post(`${this.server_url}/employee`,employee)
  }
  getallemployeeAPI(){
    return this.http.get(`${this.server_url}/employee`)
     }

     getAemployeeAPI(id:any){
      return this.http.get(`${this.server_url}/employee/${id}`)
    }
    updateemployeeAPI(employee:any){ 
      return this.http.put(`${this.server_url}/employee/${employee.id}`,employee)
    }
    deleteUserAPI(id:any){
      return this.http.delete(`${this.server_url}/employee/${id}`)
    }
}
