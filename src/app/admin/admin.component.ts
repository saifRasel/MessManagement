import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {


   constructor(private formBuilder:FormBuilder,private router:Router){
    
   }
 adminForm!: FormGroup;




 ngOnInit(){
  this.bindSaveForm();


 }


  bindSaveForm(){
    this.adminForm=this.formBuilder.group({

      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]

    })

  }
  onSubmit() {
    console.log(this.adminForm.value);
    this.router.navigate(['/home/dashboard']);
    
     
  }

}
