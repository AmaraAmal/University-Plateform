import { Component } from '@angular/core';

@Component({
  selector: 'app-list-support-cours',
  templateUrl: './list-support-cours.component.html',
  styleUrls: ['./list-support-cours.component.css']
})
export class ListSupportCoursComponent {
  supports: any[] = [
    { titre: 'Titre 1', description: 'Description 1', fichier: 'Fichier 1' },
    { titre: 'Titre 2', description: 'Description 2', fichier: 'Fichier 2' },
    { titre: 'Titre 3', description: 'Description 3', fichier: 'Fichier 3' },
    // Ajoutez d'autres supports ici au besoin
  ];
}
