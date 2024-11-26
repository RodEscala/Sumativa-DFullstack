import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms'

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ CommonModule, RouterModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup;
  users: any[]= [];
  submitted = false;

  constructor(private fb:FormBuilder){
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required],
      username: ['', Validators.required],
      birthdate: ['', Validators.required]
    });

    if (typeof localStorage !== 'undefined') {
      const usersSave = localStorage.getItem('users');
      this.users = usersSave ? JSON.parse(usersSave) : [];
    }
  }
  ngOnInit(): void {}

  registerUser(email: string, name: string, password: string, username: string, birthdate: string): boolean {
    // Comprueba si ya existe un usuario con el mismo email o nombre de usuario.
    const userexists = this.users.find(user => user.email === email || user.username === username);
    if (userexists) {
      alert('El usuario ya existe.'); // Muestra un mensaje de error.
      return false;
    }
    const newUser = { email, name, password, username, birthdate };
    this.users.push(newUser);


    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    alert('Usuario registrado exitosamente.'); // Muestra mensaje de éxito.
    return true;
  }

  onSubmit(): void {
    this.submitted = true; // Marca el formulario como enviado.

    if (this.registerForm.valid) { // Verifica si el formulario es válido.
      // Extrae los valores del formulario.
      const { email, name, password, repeatPassword, username, birthdate } = this.registerForm.value;

      // Verifica que las contraseñas coincidan.
      if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden.'); // Muestra mensaje de error si no coinciden.
        return;
      }

      // Registra al usuario si las contraseñas coinciden.
      const successfulRegistration = this.registerUser(email, name, password, username, birthdate);
      if (successfulRegistration) {
        this.registerForm.reset(); // Reinicia el formulario.
        this.submitted = false; // Marca el formulario como no enviado.

      }
    }
  }
}
