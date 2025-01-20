import { Component } from '@angular/core';

@Component({
  selector: 'app-consult-news',
  templateUrl: './consult-news.component.html',
  styleUrls: ['./consult-news.component.css']
})
export class ConsultNewsComponent {

  news = {
    title: "Avis aux élèves ingénieurs : Dépôt et soutenances de stages d’été",
    date: new Date(),
    image: "assets/img/person_1.jpg",
    content: "Les élèves ingénieurs (2ème année et 3ème année GL) sont demandés de déposer leurs rapports de stages d’été selon le planning ci-dessous : Les étudiants ayant rencontré des problèmes de déroulement de l’un ou des deux stages d’été doivent contacter le directeur du département Informatique le plus tôt possible. Il est à noter que la validation des deux stages d’été est primordiale pour l’obtention du diplôme Ingénieur.Comité des stages du département Informatique"
  };

  formatDate(date: Date): string {
    return date.toLocaleDateString(); 
  }

}
