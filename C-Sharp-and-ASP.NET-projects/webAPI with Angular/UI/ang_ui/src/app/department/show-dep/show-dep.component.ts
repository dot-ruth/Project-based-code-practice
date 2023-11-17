import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  departmentList:any = [];
  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  dept:any;


  ngOnInit(): void {
    this.refreshdepList();
  }
  addClick(){
  this.dept={
    departmentId:0,
    departmentName:""
  }
  this.ModalTitle="Add Department";
  this.ActivateAddEditDepComp=true;
  console.log(this.dept.departmentId)
  }

  editClick(item:any){
 this.dept = item;
 this.ModalTitle = "Edit Department"
 this.ActivateAddEditDepComp=true
  }

  deleteClick(item:any){
    if(confirm("Are you Sure")){
      this.service.deleteDepartment(item.departmentId).subscribe(()=>{
        alert("Department has been deleted");
        this.refreshdepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshdepList();
  }

  refreshdepList ()  {
    this.service.getDeptList().subscribe(
      (data ) => {
     this.departmentList = data;
    });
  }
}
