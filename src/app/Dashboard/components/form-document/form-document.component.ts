import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input' ;
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from '../../Services/ges/categorie.service';
import { AuthentifyService } from '../../../Users/Services/authentify.service';
import { PhotoService } from '../../../Users/Services/photo.service';
import { EMPTY, catchError, switchMap } from 'rxjs';
import { SavePhotoParams } from '../../models/dataRequest';
import { Categorie, Document } from '../../models/data';

@Component({
  selector: 'app-form-document',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
    MatSelectModule,
    RouterLink],
  templateUrl: './form-document.component.html',
  styleUrl: './form-document.component.scss'
})
export class FormDocumentComponent {
  @Input() isCardVisible: boolean = true;

  imageForm: any;
  previewImage ="";
  selectedFile: any = null;
  loading :any;
  categories: Categorie[]=[];
  selectedFileType: any;
  selecDispo='false';
  selecNature= "";
  selecType= "";
  selectedFileName: any;
  file!: File;
  photo!: File;
  selectCategorie! : Categorie;
  firstFormGroup = this._formBuilder.group({
    nom: new FormControl('', Validators.required),
    auteur: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  secondFormGroup = this._formBuilder.group({
    prixUnitaire: new FormControl('', Validators.required),
  });
  types = [
    {'value': 'Documents', 'file': ['doc', 'docx', 'pdf', 'txt', 'xml']},
    {'value': 'Audios', 'file': ['mp3', 'wav', 'wma']},
    {'value': 'Videos', 'file': ['mp4', 'mkv', 'avi', 'mov', 'webm']},
    {'value': 'Autres...', 'file': '*/*'},
  ];
  
  constructor(private categorieService: CategorieService, private PhotoService: PhotoService, private auth : AuthentifyService, private fb: FormBuilder, private http: HttpClient, private router: Router, private _formBuilder: FormBuilder){
    this.imageForm = this.fb.group({
      image: null
    });
  }
  

  ngOnInit() {
    this.loading= true;
    this.categorieService.getallcategorie().subscribe( 
      (rep) => {
        this.categories = rep;
        console.log(this.categories);
        this.loading = false;
      }, 
      (err) =>{
        console.log(err);
        this.loading = false;
      })
  }
  
  getExtension(fileName: string): string | null {
    if (fileName) {
      const parts = fileName.split('.');
      if (parts.length > 1) {
        return parts[parts.length - 1].toLowerCase();
      } else {
        return null;
      }
    } else {
      return null; // fileName est undefined
    }
  }
  updateSelectedcategorie(){
    const selectedCategorie = this.categories.find(categorie => categorie.nom === this.selectCategorie.nom);
    if (selectedCategorie) {
        this.selectCategorie = selectedCategorie;
    }
  }
  updateSelectedFileType() {
    const selectedType = this.types.find(type => type.value === this.selecType);
    if (selectedType) {
        this.selectedFileType = selectedType.file;
    }
  }
  annuler() {
    this.isCardVisible = false;
  }
  imageSelected(event: any) {
    const fileInput = event.target;
    const file = (fileInput.files as FileList)[0];
    this.photo = event.target.files[0];
  
    if (file) {
      this.photo = file
      this.previewImage = URL.createObjectURL(file);
      // Vérifiez que imageForm est défini avant patchValue()
      if (this.imageForm) {
        this.imageForm.patchValue({ image: file });
        this.imageForm.get('image').updateValueAndValidity();
      } else {
        console.error('Image form is not initialized');
      }
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFileName = event.target.files[0].name;
      const elementInput: HTMLInputElement = document.querySelector('#uploadFile') as HTMLInputElement;
      const extension = this.getExtension(this.selectedFileName);
      const elementExiste = this.selectedFileType.includes(extension);
      if (elementExiste || this.selectedFileType === '*/*') {
        this.file = event.target.files[0];
      } 
      else {
        alert("Le fichier ne correspond pas au format pris en charge");
        // if(elementInput != null){elementInput.onreset();}
        this.selectedFileName = '';
      }
    } else {
      this.selectedFileName = 'not file';
    }
  }
  setfiles(id: number){
    const file :FormData = new FormData();
    if (this.file) {
      file.append('file', this.file as string | Blob);      
    }
    const headers = this.auth.getAutorisation();
    return this.http.post(`https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/fichiers/upload/${id}`, file, {headers})
      .subscribe(
        (rep) => {
          console.log(rep)
        },
        (err) =>{
          console.log(err)
        }
      );
  }
  register(){
    // this.data = this.firstFormGroup.value;
    // const dispo = this.selecDispo === "false" ? false : true;
    // this.data = { ...this.data, ...this.secondFormGroup.value, "categorie" : this.selectCategorie, "disponible": dispo, "genre": "", "nature": this.selecNature, "type": this.selecType, "photo": "", "fichier": "" };
    // console.log(this.data);
    const d : any = {
      "categorie" : this.selectCategorie,
      "disponible": true,
      "fichier": "",
      "genre": "",
      "nature": this.selecNature,
      "photo": "",
      "type": this.selecType,
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
    }
    const data : Document = d
    const headers = this.auth.getAutorisation();
    if (headers !== "Vous n\'etes pas connectez !") {
      this.loading = true;
      this.http.post('https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/ouvrages/create', data, {headers} )
        .subscribe(
          (response: any) => {
            setTimeout(()=>{
              if (this.file !== undefined) {
                this.setfiles(response.id);
              }
              if (this.photo !== undefined) {
                const data : SavePhotoParams = {
                  'file' : this.photo,
                  'title' : response.nom,
                  'id' : response.id,
                  'context' : "ouvrage"
                } 
                this.PhotoService.setphoto( data, headers).pipe(
                  switchMap((rep: any) => {
                    this.loading= false
                    console.log(rep);
                    alert("Ouvrage enregistré avec succès!");
                    this.annuler();
                    this.router.navigateByUrl('/current-route');
                    return EMPTY;
                  }),
                  catchError((err: any) => {
                    console.log(err);
                    return EMPTY;
                  })
                ).subscribe();
              }
              console.log(response);
              alert("Ouvrage enregistrer avec success!");
              this.annuler();
              // this.router.navigateByUrl('/current-route');
            }, 1000)
          },
          (error) => {
            this.loading = false
            alert("Erreur lors de l\'enregistrement de l\'ouvrage veuillez reesayer !");
            console.log(error);
          }
        );
    } else {
      alert("Vous N\'etes pas autorisée a effectuer cette action ! \n Bien vouloir vous authentifier.")
    }
      
  }
}
