import { NgModule } from '@angular/core';

import{BrowserModule} from '@angular/platform-browser'

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';

import { BestsellerComponent } from './bestseller/bestseller.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { ProductService } from '../services/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConsultationComponent } from './consultation/consultation.component';
//import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { RegistrationComponent } from './registration/registration.component';
//import { OoohComponent } from './oooh/oooh.component';
//import { RegistrationPageComponent } from './registration-page/registration-page.component';
//import { LoginPageComponent } from './login-page/login-page.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BestsellerComponent,
    CategoriesPageComponent,
    ShoppingcartComponent,
    ConsultationComponent,
    AboutProductComponent,
    RegistrationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    RouterModule.forRoot([{path:'',redirectTo:'bestseller',pathMatch:'full'},{path:"bestseller",component:BestsellerComponent},{path:"app",component:AppComponent},{path:"consultation",component:ConsultationComponent},{path:"categories",component:CategoriesPageComponent}
    ,{path:"shoppingcart",component:ShoppingcartComponent},{path:"aboutproduct",component:AboutProductComponent}
     ,{path:"registration",component:RegistrationComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
