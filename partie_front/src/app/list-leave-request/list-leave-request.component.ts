import { Component } from '@angular/core';
import { LeaveRequest } from '../models/LeaveRequest';
import { Role } from '../models/Role';
import { Router } from '@angular/router';
import { LeaveRequestService } from '../services/leave-request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-leave-request',
  templateUrl: './list-leave-request.component.html',
  styleUrls: ['./list-leave-request.component.css']
})
export class ListLeaveRequestComponent {

  leaveRequestList: LeaveRequest[] = [];

  constructor(private router : Router, private service: LeaveRequestService) {}

  ngOnInit(): void {
    this.getListLeaveRequest()
  }

  getListLeaveRequest() {
    this.service.getListLeaveRequest().subscribe(
      (response) => {
        this.leaveRequestList = response;
        console.log("newsList", this.leaveRequestList);
      }
    );
  }

  deleteLeaveRequest(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer cette demande!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value) {
        this.service.deleteLeaveRequest(id).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Demande supprimée avec succès',
              showConfirmButton: true,
              timer: 1500
            });
            this.getListLeaveRequest();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur lors de la suppression de l\'demande',
              //text: error.message 
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre demande est en sécurité :)',
          'error'
        );
      }
    });
  }
}
