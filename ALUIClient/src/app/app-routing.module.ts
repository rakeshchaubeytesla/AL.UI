import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { StocklistComponent } from './stocklist/stocklist.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'menu',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'stockList',component: StocklistComponent},
  {path:'**',component: HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
