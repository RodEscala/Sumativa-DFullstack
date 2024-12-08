import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { CarritoFormComponent } from './components/carrito/carrito-form/carrito-form.component';


export const routes: Routes = [
  // esto indica de donde viene la ruta
  // pero debemos indicarle el path
  {path: "home",component: HomeComponent},
  {path: "login",component: LoginComponent},
  {path: "register",component: RegisterComponent},
  {path: "main",component: MainComponent},
  {path: "carrito",component: CarritoFormComponent},
  {path: "**",redirectTo:'login',pathMatch:'full'}


];
