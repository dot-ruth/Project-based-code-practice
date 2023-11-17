import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "http://localhost:5192/api";
  readonly Photourl = "http://localhost:5192/photos";

  constructor(private http:HttpClient) { }

  getDeptList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/Department');
  }

  UpdateDepartment(val:any){
    return this.http.put(this.APIurl + '/Department',val)
  }

  addDepartment(val:any){
    return this.http.post(this.APIurl + '/Department',val)
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIurl + '/Department/'+ val)
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIurl + '/Employee');
  }

  UpdateEmployee(val:any){
    return this.http.put(this.APIurl + '/Employee',val)
  }

  addEmployee(val:any){
    return this.http.post(this.APIurl + '/Employee',val)
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIurl + '/Employee/'+ val)
  }

  uploadPhoto(val:any){
    return this.http.post(this.APIurl + '/Employee/SaveFile',val)
  }

  getAllDepartmentName():Observable<any[]>{
    return this.http.get<any[]>(this.APIurl + '/Employee/GetAllDepartmentNames');
  }
}
