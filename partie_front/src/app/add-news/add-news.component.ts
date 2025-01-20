import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { News } from '../models/News';
import { TokenStorageService } from '../services/token-storage.service';
import { User } from '../models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  currentDate!: Date;
  addForm!: FormGroup;
  submitted: boolean = false;
  selectedFile: File | null = null;
  news = new News();
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  id = 2;

  constructor(private newsService: NewsService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    console.log('le nom est ', this.firstName);
    this.currentDate = new Date();  
    this.addForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      content: new FormControl(null , [Validators.required, Validators.minLength(10)]),
      date: new FormControl(this.currentDate.toISOString()),
      files: new FormControl(null)
    });

    const userId = parseInt(this.tokenStorageService.getId() || '0');
    this.news.users = new User();
  }

  onSubmit() {
    this.submitted = true;
    if(this.addForm.invalid) {
      return;
    } else {
    
      const formData = new FormData();
      this.news.title = this.addForm.value.title;
      this.news.content = this.addForm.value.content;
      this.news.date = this.currentDate;
      if (this.selectedFile) {
        this.news.files = this.selectedFile.name;
      }
      this.news.users.id = parseInt(this.tokenStorageService.getId() || '0') ;

      this.newsService.addNews(this.news).subscribe(
        (response) => {
          console.log('La news a été ajoutée avec succès:', response);
          this.addForm.reset();
          this.submitted = false;
          this.selectedFile = null; 

          Swal.fire({
            icon: 'success',
            title: 'News ajoutée!',
            text: 'La news a été ajoutée avec succès.',
            confirmButtonText: 'OK'
          });
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de l\'ajout de la news:', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur!',
            text: 'Une erreur s\'est produite lors de l\'ajout de la news.',
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
}
