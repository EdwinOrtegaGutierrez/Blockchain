import { Routes } from '@angular/router';
import { LoginComponent } from './routes/login/login.component';
import { CreateAccountComponent } from './routes/create-account/create-account.component';
import { ForgetPasswordComponent } from './routes/forget-password/forget-password.component';
import { HomeComponent } from './routes/home/home.component';
import { ErrorRouteComponent } from './components/error-route/error-route.component';
import { CreateComponent } from './routes/home/content/create/create.component';

export const routes: Routes = [
    {
        path:"",
        component:LoginComponent
    },
    {
        path:"create_account",
        component:CreateAccountComponent
    },
    {
        path:"forgot_password",
        component:ForgetPasswordComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"create",
        component:CreateComponent
    },
    {
        path:"user",
        component:ErrorRouteComponent
    },
    {
        path:"**",
        component:LoginComponent
    }
];
