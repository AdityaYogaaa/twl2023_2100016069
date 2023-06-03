import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page-content/home/home.component';
import { ProductInputComponent } from './page-content/product/input/product-input.component';
import { ProductListComponent } from './page-content/product/list/product-list.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "product/input", component: ProductInputComponent},
  { path: "product/list", component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
