import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../models/Reclamation';
import { Router } from '@angular/router';
import { ReclamationsService } from '../services/reclamations.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-claims',
  templateUrl: './list-claims.component.html',
  styleUrls: ['./list-claims.component.css']
})
export class ListClaimsComponent implements OnInit{

  claimsList: Reclamation[] = [];
  
  constructor(private router : Router, private service: ReclamationsService) {}
  ngOnInit(): void {
    this.getClaims()
  }

  getClaims() {
    this.service.getClaims().subscribe(
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

/* 
  reclamations: Reclamation[] = [
    { contenu: 'Problème d\'accès aux cours en ligne', status: 'En attente', user.email: 'john.doe@example.com', telephone: '123456789' },
    { contenu: 'Erreur dans l\'affichage des notes', status: 'En cours de traitement', email: 'jane.smith@example.com', telephone: '987654321' },
    { contenu: 'Difficulté à soumettre les devoirs', status: 'En attente', email: 'foo.bar@example.com', telephone: '555555555' },
  ]; */
}
