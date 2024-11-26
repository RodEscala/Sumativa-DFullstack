import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { CarritoListaComponent } from './components/carrito/carrito-lista/carrito-lista.component';


export const routes: Routes = [
  // esto indica de donde vieme la ruta
  // pero debemos indicarle el path
  {path: "home",component: HomeComponent},
  {path: "login",component: LoginComponent},
  {path: "register",component: RegisterComponent},
  {path: "main",component: MainComponent},
  {path: "carrito", component:CarritoListaComponent},
  {path: "**",redirectTo:'main',pathMatch:'full'}


];
