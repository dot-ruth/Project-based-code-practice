import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dept:any;
  departmentId:string = "";
  departmentName:string = "";
  
  
  ngOnInit(): void {
    this.departmentId = this.dept.departmentId;
    this.departmentName = this.dept.departmentName;
  }

  

  addDepartment(){
    var val = {
      departmentName:this.departmentName
    };
    console.log(val);
    this.service.addDepartment(val).subscribe(()=>{
      alert("Department is added to the list");
    })
  }

  updateDepartment(){
      
    var val = {
      departmentId:this.departmentId,
      departmentName:this.departmentName
    };
    this.service.UpdateDepartment(val).subscribe(() =>{
      alert("Department list is Updated");
    })
  }

}
