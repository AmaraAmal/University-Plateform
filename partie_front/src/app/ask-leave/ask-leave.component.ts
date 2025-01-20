import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveRequestService } from '../services/leave-request.service';
import { Router } from '@angular/router';
import { LeaveRequest } from '../models/LeaveRequest';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ask-leave',
  templateUrl: './ask-leave.component.html',
  styleUrls: ['./ask-leave.component.css']
})
export class AskLeaveComponent implements OnInit {
  leaveForm!: FormGroup;
  request = new LeaveRequest();
  submitted: boolean = false;
  selectedFile: File | null = null;


  constructor(private formBuilder: FormBuilder, private router : Router, private service: LeaveRequestService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.leaveForm = this.formBuilder.group({
      /*nom: ['', Validators.required],
      prenom: ['', Validators.required],*/
      typeConge: ['', Validators.required],
      //justification: [null, Validators.required],
      dateDebut: [null, Validators.required],
      dateFin: [null, Validators.required]
    });
    const userId = parseInt(this.tokenStorageService.getId() || '0');
    this.request.users = new User();

  }



  onSubmit() {
    this.submitted = true;
    if(this.leaveForm.invalid) {
      return;
    } else {
    
      const formData = new FormData();
      this.request.start_date = this.leaveForm.value.dateDebut;
      this.request.end_date = this.leaveForm.value.dateFin;
      this.request.type = this.leaveForm.value.typeConge;
      this.request.status = 'en attente'
      if (this.selectedFile) {
        this.request.files = this.selectedFile.name;
      }
      this.request.users.id = parseInt(this.tokenStorageService.getId() || '0') ;

      this.service.addLeaveRequest(this.request).subscribe(
        (response) => {
          console.log('La request a été ajoutée avec succès:', response);
          this.leaveForm.reset();
          this.submitted = false;
         // this.selectedFile = null; 

          Swal.fire({
            icon: 'success',
            title: 'demande ajoutée!',
            text: 'La Demande a été ajoutée avec succès.',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'ajout de la demande:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de l\'ajout de la demande.',
            confirmButtonText: 'OK'
          });
        }
      );
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.selectedFile = file;
  }

  // Function to mark all fields in the form group as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
}

