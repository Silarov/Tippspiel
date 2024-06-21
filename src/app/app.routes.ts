import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import {LoginComponent} from "./form/login/login.component";
import {RegisterComponent} from "./form/register/register.component";
import {NotAllowedComponent} from "./errors/not-allowed/not-allowed.component";
import {TippingPageComponent} from "./tipping-page/tipping-page.component";
import {GroupDetailComponent} from "./group-detail/group-detail.component";
import {ProtectedComponent} from "./errors/protected/protected.component";
import {AccountInformationComponent} from "./account-information/account-information.component";
import {TippingDetailComponent} from "./tipping-page/tipping-detail/tipping-detail.component";

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },

    { path: 'not-allowed', component: NotAllowedComponent },

    { path: 'home', component: HomepageComponent }, //has to be logged in, if not --> login page

    { path: 'login', component: LoginComponent }, //can't be logged in
    { path: 'register', component: RegisterComponent }, //can't be logged in

  { path: 'group/new', component: GroupDetailComponent, data: {type: 'new'}}, //has to be logged in
  { path: 'group/edit/:guid', component: GroupDetailComponent, data: {type: 'edit'}}, //has to be logged in

  { path: 'tipping-page', component: TippingPageComponent }, //has to be logged in

  { path: 'account', component: AccountInformationComponent }, //has to be logged in

  { path: 'tip-detail/new', component: TippingDetailComponent, data: {type: 'new'}}, //has to be logged in
  { path: 'tip-detail/edit/:guid', component: TippingDetailComponent, data: {type: 'edit'}}, //has to be logged in

  { path: 'protected', component: ProtectedComponent },


    { path: '**', component: NotFoundComponent },
  ];

