import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { News } from '../models/News';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements OnInit{

  newsList: News[] = [];
  constructor(private router : Router, private service: NewsService) {}
  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.service.getNews().subscribe(
      (response) => {
        this.newsList = response;
        console.log("newsList", this.newsList);
      }
    );
  }

 

  deleteNews(id: any) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas récupérer cette actualité!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Non, annuler'
    }).then((result) => {
      if (result.value) {
        this.service.deleteNews(id).subscribe(
          (response) => {
            Swal.fire({
              icon: 'success',
              title: 'Actualité supprimée avec succès',
              showConfirmButton: true,
              timer: 1500
            });
            // Recharger la liste des actualités après la suppression
            this.getNews();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur lors de la suppression de l\'actualité',
              //text: error.message 
            });
          }
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre actualité est en sécurité :)',
          'error'
        );
      }
    });
  }




}
