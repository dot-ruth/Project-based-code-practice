import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  employeeList:any = [];
  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  emp:any;


  ngOnInit(): void {
    this.refreshdepList();
  }
  addClick(){
  this.emp={
    
            employeeId:0,
            employeeName:"",
            department:"",
            dateOfJoining:"",
            photofilename:""
  }
  this.ModalTitle="Add Employee";
  this.ActivateAddEditDepComp=true;
  }

  editClick(item:any){
 this.emp = item;
 this.ModalTitle = "Edit Employee Data"
 this.ActivateAddEditDepComp=true
  }

  deleteClick(item:any){
    if(confirm("Are you Sure")){
      this.service.deleteEmployee(item.employeeId).subscribe(()=>{
        alert("Employee has been Removed from the list");
        this.refreshdepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshdepList();
  }

  refreshdepList ()  {
    this.service.getEmpList().subscribe(
      (data ) => {
     this.employeeList = data;
    });
  }

}
