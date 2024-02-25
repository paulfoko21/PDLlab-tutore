import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from  '@angular/material/input' ;
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from  '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActionClickService } from '../../../Users/Services/action-click.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatButtonModule
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  loginForm: any;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  isCardVisible: boolean = true;

  constructor(private action: ActionClickService, private fb: FormBuilder) {
    }

  ngOnInit() {
    this.loginForm = this.fb.group({
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
  getErrorMessage() {
    
    if (this.email.hasError("required")) {
      return 'Entrer une valeur';
    }

    return this.email.hasError('email') ? 'Votre email est invalide' : '';
  }

}
