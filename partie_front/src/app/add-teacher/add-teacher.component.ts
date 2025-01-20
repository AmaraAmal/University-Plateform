import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';
import { Role } from '../models/Role';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  addForm!: FormGroup;
  submitted: boolean = false;
  newTeacher: User = new User();

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid) {
      return;
    } else {
      this.newTeacher.firstName = this.addForm.value.firstName;
      this.newTeacher.lastName = this.addForm.value.lastName;
      this.newTeacher.email = this.addForm.value.email;
      this.newTeacher.password = this.addForm.value.password;
      this.newTeacher.role = Role.ENSEIGNANT;

      console.log("new teacher", this.newTeacher);

      return this.service.addTeacher(this.newTeacher).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Enseignant ajouté avec succès',
            text: 'L\'enseignant a été ajouté avec succès.',
            showConfirmButton: true
          }).then((result) => {
            if (result.isConfirmed) {
              this.addForm.reset();
              this.submitted = false;
              this.router.navigate(['/dashboardAdmin']);
            }
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'ajout de l\'enseignant:', error);
        }
      );
    }
  }

}
