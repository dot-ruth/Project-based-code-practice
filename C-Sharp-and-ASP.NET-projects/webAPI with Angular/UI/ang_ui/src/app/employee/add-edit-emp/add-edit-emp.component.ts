import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() emp:any;
  employeeId:string = "";
  employeeName:string = "";
  department:string = "";
  dateOfJoining:string = "";
  photofilename:string = "";
  photofilepath:string = "";
  departmentList:any = [ ];
  
  
  ngOnInit(): void {
    /*this.employeeId = this.emp.employeeId;
    this.employeeName = this.emp.employeeName;
    this.department = this.emp.department;
    this.dateOfJoining = this.emp.dateOfJoining;
    this.photofilename = this.emp.photofilename;*/
    this.loadDepartmentList();
  }
  
  loadDepartmentList(){
    this.service.getAllDepartmentName().subscribe((data:any) =>{
      this.departmentList = data;
      this.employeeId = this.emp.employeeId;
    this.employeeName = this.emp.employeeName;
    this.department = this.emp.department;
    this.dateOfJoining = this.emp.dateOfJoining;
    this.photofilename = this.emp.photofilename;
    this.photofilepath = this.service.Photourl + this.photofilename;
    })
  }
  

  addEmployee(){
    var val = {
     employeeId:this.employeeId,
     employeeName:this.employeeName,
     department:this.department,
     dateOfJoining:this.dateOfJoining,
     photofilename:this.photofilename
    };
    console.log(val);
    this.service.addEmployee(val).subscribe(()=>{
      alert("An Employee is added to the list");
    })
  }

  updateEmployee(){
      
    var val = {
      employeeId:this.employeeId,
     employeeName:this.employeeName,
     department:this.department,
     dateOfJoining:this.dateOfJoining,
     photofilename:this.photofilename
    };
    this.service.UpdateEmployee(val).subscribe(() =>{
      alert("The Employee list is Updated");
    })
  }

  uploadPhoto(event:any){
    var file = event.target.files[0];
    const formData:FormData = new FormData();
    formData.append("uploadedfile",file,file.name);

    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.photofilename = data.toString();
      this.photofilepath = this.service.Photourl + this.photofilename;
    })
  }

}
