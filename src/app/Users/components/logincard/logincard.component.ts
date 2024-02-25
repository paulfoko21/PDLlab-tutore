import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input' ;
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from  '@angular/material/form-field';
import { ActionClickService } from '../../Services/action-click.service';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AuthentifyService } from '../../Services/authentify.service';


@Component({
  selector: 'app-logincard',
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
  templateUrl: './logincard.component.html',
  styleUrl: './logincard.component.scss'
})
export class LogincardComponent {
  Errorconnection= false;
  loading = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  hide = true;
  isCardVisible: boolean = true;

  constructor(private action: ActionClickService, private fb: FormBuilder, private router: Router, private auth : AuthentifyService) {}
  getErrorMessage() {

    if (this.email.hasError("required")) {
      return 'Entrer une valeur';
    }

    return this.email.hasError('email') ? 'Votre email est invalide' : '';
  }
  ngOnInit() {
    this.Errorconnection = false
    this.action.cardClick$.subscribe(() => {
      this.isCardVisible = true;
    });
  }
  onSubmit() {
    this.loading = true;
    const data = this.form.value;
    console.log(data);
    this.auth.login(data).subscribe(
      (rep) => {
        this.loading = false;
        setTimeout(() => {
          console.log(rep);
          alert(`Bon retour, sur PDL-lab. ${rep.login} ${rep.nom}`);
          localStorage.setItem('user', JSON.stringify(rep));
          if (rep.roles.nom == "UTILISATEUR") {
            this.router.navigate(['/admin']);
          } else {
          this.router.navigate(['/Accueil']);
          }
        }, 1000);
      },
      (error) => {
        this.loading = false;
        console.log(error);
        this.Errorconnection = true; 
        this.form.reset();
      }
    );
  }
}

