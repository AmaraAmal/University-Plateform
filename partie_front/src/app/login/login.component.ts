import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { retry } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup ;
  submitted:boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  role! : String;

  constructor(private authService : AuthService , private tokenStorage : TokenStorageService, private router : Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email, Validators.minLength(6)]),
      password : new FormControl(null, [Validators.required, Validators.minLength(3)])
    }
    )

      
  }

  get f() {return this.loginForm.controls;}

  onSubmit() {
    this.submitted = true;
    console.log("hello");
    console.log("email:"+this.f['email'].value);
    console.log("pwd:"+this.f['password'].value);


    if (this.loginForm.invalid) {
      console.log(this.submitted);
      return;
    } else {
      //this.authService.login('ghadagzauii@gmail.com', '1234').subscribe(
      this.authService.login(this.f['email'].value, this.f['password'].value).subscribe(
        data => {
          console.log("le token est",data.token)
          this.tokenStorage.saveToken(data.token);
          //this.tokenStorage.saveUser(data);
          this.tokenStorage.saveFirstName(data.firstName);
          this.tokenStorage.saveLastName(data.lastName);
          this.tokenStorage.saveRole(data.role);
          this.tokenStorage.saveId(data.id);
          this.role = data.role;
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          //this.role = this.tokenStorage.getUser().roles;
          console.log(data);

          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Vous êtes connecté avec succès !'
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
          console.log('Une erreur s\'est produite lors de la connexion :', error);
          Swal.fire({
            icon: 'error',
            title: 'Échec de la connexion',
            text: 'L\'adresse e-mail ou le mot de passe est incorrect. Veuillez réessayer.'
          });
      }
      )

    }
  }

}
