import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input' ;
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from  '@angular/material/form-field';
import { ActionClickService } from '../../Services/action-click.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singupcard',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './singupcard.component.html',
  styleUrl: './singupcard.component.scss'
})
export class SingupcardComponent {
  singupForm: any;
  hide = true;
  isCardVisible: boolean = true;
  form = new FormGroup({
    nom: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    passWord: new FormControl('', Validators.required),
    photo: new FormControl('',Validators.required)
  });
  loading= false;

  constructor(private action: ActionClickService, private fb: FormBuilder, private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.singupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.action.cardClick$.subscribe(() => {
      this.isCardVisible = true;
    });
  }
  closeCard() {
    this.isCardVisible = false;
  }
  onSubmit() {
    this.loading = true;
    const d = this.form.value;
    const data = { ...d, roles: {"id":15, "nom": "ADHERENT"} };
    console.log(data);
    this.http.post('https://gestion-bibliotheques.onrender.com/gestionBiliotheques/v1.O/utilisateur/create', data)
      .subscribe(
        (response) => {
          this.loading = false;
          setTimeout(() => {
            console.log(response);
            alert("Votre compte a ete créer avec success, connectez-vous pour continuer");
            this.router.navigate(['/login']);
          }, 1000);
        },
        (error) => {
          this.loading = false;
          console.log(error);
          this.form.reset();
        }
      );
  }
}
