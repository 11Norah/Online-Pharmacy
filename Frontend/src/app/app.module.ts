import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

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
import { ProfileComponent } from './profile/profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { MyinfoComponent } from './myinfo/myinfo.component';



import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SelectedCategoryComponent } from './selected-category/selected-category.component';


import { RegistrationComponent } from './registration/registration.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditdatapageComponent } from './editdatapage/editdatapage.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    BestsellerComponent,
        SelectedCategoryComponent,

    CategoriesPageComponent,
    ShoppingcartComponent,
    ConsultationComponent,
    AboutProductComponent,


    ProfileComponent,
    MyordersComponent,
    MyinfoComponent,



    ConfirmationComponent,
          RegistrationComponent,
          UpdatedataComponent,
          EditdatapageComponent,
          ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    RouterModule.forRoot([{path:'',redirectTo:'bestseller',pathMatch:'full'},{path:"bestseller",component:BestsellerComponent},{path:"app",component:AppComponent},{path:"consultation",component:ConsultationComponent},{path:"categories",component:CategoriesPageComponent}

    ,{path:"shoppingcart",component:ShoppingcartComponent},{path:"aboutproduct",component:AboutProductComponent}
    ,{path:"registration",component:RegistrationComponent} , {path:"SelectedCategory",component:SelectedCategoryComponent},{path:"confirm",component:ConfirmationComponent}
   , {path:"profile",redirectTo:'myinfo',pathMatch:'full'},{path:"myinfo",component:MyinfoComponent},{path:"myorders",component:MyordersComponent},{path:"updatedata",redirectTo:'editdata',pathMatch:'full'},{path:"editdata",component:EditdatapageComponent},{path:"changepassword",component:ChangepasswordComponent}]),
      BrowserAnimationsModule
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
