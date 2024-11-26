import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators} from '@angular/forms'
import { RouterModule,Router } from '@angular/router';

declare let bootstrap:any;

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  users:any[] =[];

  constructor (private fb:FormBuilder, private router: Router, private elref:ElementRef ){

    if(typeof localStorage !== 'undefined'){
      const usersSaves = localStorage.getItem('users');
      this.users = usersSaves ? JSON.parse(usersSaves):[];
    }
  }

  ngOnInit(): void {
      this.loginForm = this.fb.group({
        emailOrUsername: ['',Validators.required],
        password:['',Validators.required]
      });

  }

  logIn(emailOrUsername: string, password:string):boolean{
    const user = this.users.find( user =>
    (user.email === emailOrUsername || user.userName === emailOrUsername) &&
    user.password === password)

    if (user){
      this.showToast("Inicio de sesion exitoso",'success');
      this.router.navigate(['/home'])
      return true;

    }else{
      this.showToast("Email/usuario o contraseña Incorrectas",'danger');
      return false;
    }

  }

  onSubmit(){
    if(this.loginForm.valid){
      const emailOrUsernameControl = this.loginForm.get('emailOrUsername');
      const passwordControl = this.loginForm.get('password');

      if (emailOrUsernameControl && passwordControl){

        const emailOrUsername = emailOrUsernameControl.value;
        const password = passwordControl.value;

        const successfulStart = this.logIn(emailOrUsername,password);

        if (successfulStart){
          this.loginForm.reset();
        }else{
          console.error('Form control inexistente');
          this.showToast('Formulario no valido','danger');
        }

      }else{
        this.showToast('Formulario no valido','danger');
      }
    }
  }

  navigateToRegister(){
    this.router.navigateByUrl('/register').then(() =>{
      window.location.reload();
    })
  }

  // Método para mostrar un mensaje emergente (toast)
  showToast(message: string, type: 'success' | 'danger') {
    const toastContainer = this.elref.nativeElement.querySelector('#toast-container'); // Selecciona el contenedor de los toasts
    const toastElement = document.createElement('div'); // Crea un elemento div para el toast
    toastElement.className = `toast align-items-center text-bg-${type} border-0`; // Aplica clases según el tipo de mensaje
    toastElement.role = 'alert';
    toastElement.ariaLive = 'assertive';
    toastElement.ariaAtomic = 'true';
    toastElement.innerHTML = `
      <div class="d-flex">
        <div class="toast-body">
          ${message} <!-- Mensaje del toast -->
        </div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    `;
    toastContainer.appendChild(toastElement); // Añade el toast al contenedor

    const toastBootstrap = new bootstrap.Toast(toastElement); // Inicializa el toast usando Bootstrap
    toastBootstrap.show(); // Muestra el toast

    setTimeout(() => {
      toastBootstrap.hide(); // Oculta el toast después de 3 segundos
      toastElement.remove(); // Elimina el elemento del DOM
    }, 3000);
  }


}
