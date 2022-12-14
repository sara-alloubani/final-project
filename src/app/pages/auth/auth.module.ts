import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';


const MatImport=[
  MatFormFieldModule,MatInputModule,MatButtonModule,MatRadioModule,
]
@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [CommonModule,AuthRoutingModule,...MatImport],
})
export class AuthModule { }
