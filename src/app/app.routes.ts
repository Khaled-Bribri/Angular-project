import { Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserComponent } from './component/user/user.component';

const ROUTES: Routes = [
  { path: 'profile-user', component: UserComponent },
  { path: 'sign-up', component:SignUpComponent},
];

export { ROUTES };