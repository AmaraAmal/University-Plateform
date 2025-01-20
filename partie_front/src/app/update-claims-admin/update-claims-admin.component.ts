import { Component } from '@angular/core';
import { Reclamation } from '../models/Reclamation';
import { NewsService } from '../services/news.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationsService } from '../services/reclamations.service';
import Swal from 'sweetalert2';
import { Role } from '../models/Role';
import { User } from '../models/User';

@Component({
  selector: 'app-update-claims-admin',
  templateUrl: './update-claims-admin.component.html',
  styleUrls: ['./update-claims-admin.component.css']
})
export class UpdateClaimsAdminComponent {

  edited: boolean = false;
  currentClaim: Reclamation = new Reclamation();

  submitted: boolean = false;
  currentDate: Date = new Date();

  /*currentNews: News = {
    id: 0,
    title: '',
    content: '',
    date: new Date(),
    files: '',
    users: { id: 0, firstName: '', lastName:'', phoneNumber: '',email: '', password: '', role: Role.USER}
  };*/ 

  constructor(private service: ReclamationsService, private tokenStorageService: TokenStorageService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentClaim.users = new User(); 
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getClaimById(id);
      console.log("l id est",id);
    });
  }

  getClaimById(id: any) {
    this.service.getClaimsById(id).subscribe(
      (response) => {
        this.currentClaim = response;
        console.log(this.currentClaim);
      },
      (error) => {
        console.error('Erreur lors de la récupération de la réclamation : ', error);
      }
    );
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.currentClaim.content || !this.currentClaim.status || !this.currentClaim.dateReclamation || !this.currentClaim.users.email || !this.currentClaim.users.firstName || !this.currentClaim.users.lastName || !this.currentClaim.users.phoneNumber) {
      return;
    } else {
      console.log(this.currentClaim.status);
      console.log(this.currentClaim.content);
      console.log(this.currentClaim.dateReclamation);
      console.log(this.currentClaim.users.firstName);
      console.log(this.currentClaim.users.lastName);
      console.log(this.currentClaim.users.phoneNumber);
      console.log(this.currentClaim.users.email);

      this.service.addClaim(this.currentClaim).subscribe(
        (response) => {
          Swal.fire({
            icon: 'success',
            title: 'Etat de réclamation modifié avec succès',
            showConfirmButton: true
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/dashboardAdmin']);
            }
          });
        },
        (error) => {
          console.error('Erreur lors de la modification de l\' etat de réclamation : ', error);
        }
      );
    }
  }

  onStatusChange(): void {
    this.edited = true;
  }
  

}
