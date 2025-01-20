// subject.model.ts

import { User } from 'src/app/models/User'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de dossiers
import { Course } from 'src/app/models/Course'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de dossiers
import { Marks } from 'src/app/models/Marks'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de dossiers

export class Subject {
  id!: number;
  name !: string ;
  files!: string;
  user!: User;
  courses!: Course[];
  mark!: Marks; }



