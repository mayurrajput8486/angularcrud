import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../../shared/crud.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {

  constructor (private crud:CrudService, private location:Location, private route:Router) {}

  updateData : any

  updateForm = new FormGroup({
    id : new FormControl(),
    fname : new FormControl(),
    lname : new FormControl(),
    address : new FormControl(),
    gender : new FormControl(),
    state : new FormControl(),
    city: new FormControl(),
    dob : new FormControl(),
    pincode : new FormControl(),
    course : new FormControl(),
    email : new FormControl()
  })

  ngOnInit () {
    this.updateData = this.location.getState()
    this.updateForm.patchValue({
      id : this.updateData.id,
      fname : this.updateData.fname,
      lname : this.updateData.lname,
      address : this.updateData.address,
      gender : this.updateData.gender,
      state: this.updateData.state,
      city : this.updateData.city,
      dob:this.updateData.dob,
      pincode : this.updateData.pincode,
      course : this.updateData.course,
      email: this.updateData.email
    })
  }

  updateRecord () {
    this.crud.updateStudent(this.updateForm.value).subscribe()
    alert('Data Updated !!!')
    this.route.navigate(['studentlist'])
  }



}
