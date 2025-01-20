import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent {
  @Output() addCourseMaterial = new EventEmitter<any>();

  courseMaterialForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.courseMaterialForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      file: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.courseMaterialForm.valid) {
      const formData = new FormData();
      const title = this.courseMaterialForm.value.title;
      const description = this.courseMaterialForm.value.description;
      const file = this.courseMaterialForm.value.file;

      if (title && file) {
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        this.addCourseMaterial.emit(formData);
        this.courseMaterialForm.reset();
      } else {
        console.error('Le titre et le fichier sont requis.');
      }
    } else {
      // Gérer les erreurs de validation du formulaire
    }
  }

  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.courseMaterialForm.patchValue({ file });
      this.courseMaterialForm.get('file')?.updateValueAndValidity();
    }
  }

  retour() {
    console.log('Retour');
  }
}
