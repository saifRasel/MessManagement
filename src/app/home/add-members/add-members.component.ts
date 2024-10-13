import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent {
  constructor(private fb: FormBuilder, private router: Router) {

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
    this.router.navigate(['/content/test-com']);

  }

}
