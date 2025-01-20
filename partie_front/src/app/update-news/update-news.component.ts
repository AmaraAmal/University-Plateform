import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../models/News';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Role } from '../models/Role';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent implements OnInit{

  edited: boolean = false;
  currentNews: News = {
    id: 0,
    title: '',
    content: '',
    date: new Date(),
    files: '',
    users: { id: 0, firstName: '', lastName:'', phoneNumber: '',email: '', password: '', role: Role.USER}
  };
  submitted: boolean = false;
  currentDate: Date = new Date();
  

  constructor(private service: NewsService, private tokenStorageService: TokenStorageService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getNewsById(id);
      console.log("l id est",id);
    });
  }
  
  getNewsById(id: any) {
    this.service.getNewsById(id).subscribe(
      (response) => {
        this.currentNews = response;
        console.log(this.currentNews);
      },
      (error) => {
        console.error('Erreur lors de la récupération de l\'actualité : ', error);
      }
    );
  }

  
onSubmit(): void {
  this.submitted = true;
  if (!this.currentNews.title || !this.currentNews.content) {
    return;
  } else {
    this.service.addNews(this.currentNews).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Actualité modifiée avec succès',
          showConfirmButton: true
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/dashboardAdmin']);
          }
        });
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'actualité : ', error);
      }
    );
  }
}

onTitleChange(): void {
  this.edited = true;
}

onContentChange(): void {
  this.edited = true;
}
}
