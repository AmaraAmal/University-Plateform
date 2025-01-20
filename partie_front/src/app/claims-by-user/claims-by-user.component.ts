import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReclamationsService } from '../services/reclamations.service';
import { Reclamation } from '../models/Reclamation';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-claims-by-user',
  templateUrl: './claims-by-user.component.html',
  styleUrls: ['./claims-by-user.component.css']
})
export class ClaimsByUserComponent implements OnInit {

  claimsList: Reclamation[] = [];

  id: any;
  constructor(private router : Router, private service: ReclamationsService, private tokenStorage: TokenStorageService) {}
  
  ngOnInit(): void {
    this.id = this.tokenStorage.getId()
    this.getClaims()
  }

  getClaims() {
    this.service.getClaimsByUser(this.id).subscribe(
      (response) => {
        this.claimsList = response;
        console.log("claimsList", this.claimsList);
      }
    );
  }

  deleteClaims(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer cette réclamation!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value){
        this.service.deleteClaims(id).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Réclamation supprimée avec succès',
              showConfirmButton: true,
              timer: 1500
            });
            this.getClaims();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur lors de la suppression de la réclamation',
              //text: error.message 
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre réclamation est en sécurité :)',
          'error'
        );
      }
    });
  }


}
