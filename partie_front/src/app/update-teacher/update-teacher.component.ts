import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UsersService } from '../services/users.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent implements OnInit{
  edited: boolean = false;
  currentUser!: User;
  submitted: boolean = false;
  currentDate: Date = new Date();
  

  constructor(private service: UsersService, private tokenStorageService: TokenStorageService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getUserById(id);
      console.log("l id est",id);
    });
  }
  
  getUserById(id: any) {
    this.service.getUserById(id).subscribe(
      (response) => {
        this.currentUser = response;
        console.log(this.currentUser);
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'actualité : ', error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.currentUser.firstName || !this.currentUser.lastName || !this.currentUser.phoneNumber || !this.currentUser.email) {
      return;
    } else {
      this.service.updateTeacher(this.currentUser.id, this.currentUser).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Compte modifié avec succès',
            showConfirmButton: true
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/dashboardAdmin']);
            }
          });
        },
        (error) => {
          console.error('Erreur lors de la modification du compte : ', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de la modification du compte utilisateur.'
          });
        }
      );
    }
  } 
  

onFirstNameChange(): void {
  this.edited = true;
}

onLastNameChange(): void {
  this.edited = true;
}

onEmailChange(): void {
  this.edited = true;
}

onPhoneNumberChange(): void {
  this.edited = true;
}
}
