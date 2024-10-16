import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessServicesService } from 'src/app/service/mess/mess-services.service';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent {


  constructor(private fb: FormBuilder, private router: Router,private service:MessServicesService) {

  }

  addMemberForm!: FormGroup


  ngOnInit() {
    this.bindForm()

  }

  bindForm() {
    this.addMemberForm = this.fb.group({

      fullName: [],
      mobileNo: [],
      emailAddress: [],
      designation: [],
      department: []

    })
  }

  addMember() {
    this.service.saveMember(this.addMemberForm.value).subscribe(res=>{
    alert(res);
    });
    
  


  }

}
