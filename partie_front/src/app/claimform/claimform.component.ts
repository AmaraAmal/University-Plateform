import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reclamation } from '../models/Reclamation';
import { ReclamationsService } from '../services/reclamations.service';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claimform',
  templateUrl: './claimform.component.html',
  styleUrls: ['./claimform.component.css']
})
export class ClaimformComponent implements OnInit {
  claimForm!: FormGroup;
  claim = new Reclamation();
  submitted: boolean = false;
  currentDate: Date = new Date();  

  constructor(private formBuilder: FormBuilder, private service: ReclamationsService,private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.claimForm = this.formBuilder.group({
      content: ['', Validators.required]
    });

    const userId = parseInt(this.tokenStorageService.getId() || '0');
    this.claim.users = new User();
  }

  onSubmit() {
    this.submitted = true;
    if(this.claimForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      this.claim.content = this.claimForm.value.content;
      this.claim.dateReclamation = this.currentDate;
      this.claim.status = 'en attente';
      this.claim.users.firstName = this.tokenStorageService.getFirstName() || '';
      this.claim.users.lastName = this.tokenStorageService.getLastName() || '';
      
      this.claim.users.id = parseInt(this.tokenStorageService.getId() || '0') ;

      this.service.addClaim(this.claim).subscribe(
        (response) => {
          console.log('La réclamation a été ajoutée avec succès:', response);
          this.claimForm.reset();
          this.submitted = false;

          // Afficher une alerte Swal pour confirmer que la réclamation a été soumise avec succès
          Swal.fire({
            icon: 'success',
            title: 'Réclamation soumise!',
            text: 'Votre réclamation a été soumise avec succès. Nous vous contacterons dès que possible.',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/']);             }
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'ajout de la réclamation:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de l\'ajout de la réclamation.',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }
}
