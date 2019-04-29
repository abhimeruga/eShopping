import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductStoreComponent} from 'src/app/product-store/product-store.component';
import {LoginComponent} from 'src/app/login/login.component';
import {ProductFuctionComponent} from 'src/app/product-fuction/product-fuction.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'productPage', component: ProductStoreComponent },
  { path: 'productEdit', component: ProductFuctionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
