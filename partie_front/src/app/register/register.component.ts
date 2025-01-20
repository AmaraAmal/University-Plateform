import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  roles: string[] = ['ADMIN', 'ENSEIGNANT', 'ETUDIANT'];
  submitted:boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  role! : String;

  constructor(private authService : AuthService , private tokenStorage : TokenStorageService, private router : Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      mail: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      //confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      role: new FormControl(null, [Validators.required])
    });
  }

  get f() {return this.registerForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else { 
      console.log("bonjour");
      this.authService.register(this.f['firstName'].value, this.f['lastName'].value, this.f['firstName'].value, this.f['mail'].value, this.f['phoneNumber'].value, this.f['role'].value ).subscribe(
        data => {
          console.log("le token est",data.token)
          this.tokenStorage.saveToken(data.token);
          //this.tokenStorage.saveUser(data);
          this.tokenStorage.saveFirstName(data.firstName);
          this.tokenStorage.saveLastName(data.lastName);
          this.tokenStorage.saveRole(data.role);
          this.role = data.role;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.role = this.tokenStorage.getUser().roles;
          console.log(data);

          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Votre compte a été créé avec succès!'
          });

          console.log(this.role);
          switch (this.role) {
            case 'ADMIN':
              this.router.navigate(['/dashboardAdmin']);
              break;
            case 'ENSEIGNANT':
              this.router.navigate(['/dashboardTeacher']);
              break;
            case 'ETUDIANT':
              this.router.navigate(['/dashboardStudent']);
              break;
            default:
              this.router.navigate(['/']);
          }
        }, error => {
          console.log('Une erreur s\'est produite lors de la création de votre compte:', error);
          Swal.fire({
            icon: 'error',
            title: 'Échec de la connexion',
            text: 'Une erreur s\'est produite lors de la création de votre compte'
          });
      }
      )

    }
  }

  
  
}
