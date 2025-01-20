import { Component, OnInit } from '@angular/core';
import { Student } from '../models/Student';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit{

  userList: User[] = [];
  constructor(private router : Router, private service: UsersService) {}

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.service.getStudents().subscribe(
      (response) => {
        this.userList = response;
        console.log("userList", this.userList);
      }
    );
  }

  deleteUser(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer ce compte utilisateur!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value) {
        this.service.deleteUser(id).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Compte utilisateur supprimé avec succès',
              showConfirmButton: true,
              timer: 1500
            });
            this.getUsers();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur lors de la suppression du compte utilisateur',
              //text: error.message 
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Le compte utilisateur est en sécurité :)',
          'error'
        );
      }
    });
  }


}
