import { Component, OnInit } from '@angular/core';
import { News } from '../models/News';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Role } from '../models/Role';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  newsList!: News[] ;
  loading: boolean = true; // Variable de chargement
  constructor(private router : Router, private service: NewsService) {}
  ngOnInit(): void {
    this.getNews()
  }

  getNews() {
    this.service.getNews().subscribe(
      (response) => {
        this.newsList = response;
        this.loading = false; // Met fin au chargement une fois les données récupérées
        console.log("newsList", this.newsList);
      },
      (error) => {
        console.error('Erreur lors de la récupération des actualités :', error);
        this.loading = false; // Met fin au chargement en cas d'erreur
      }
    );
  }
}
