import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit{

addForm! : FormGroup;
submitted: boolean = false;

ngOnInit(): void {
  this.addForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.minLength(6) ,Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    filiere: new FormControl(null, [Validators.required]),
    niveau: new FormControl(null, [Validators.required]),
    groupe: new FormControl(null, Validators.required)
  })
}

onSubmit() {
  this.submitted = true;
  if(this.addForm.invalid) {
    return;
  } else {
    console.log("ok");
  }
}

}
