import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestsellerComponent } from './bestseller/bestseller.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoriesComponent,
    BestsellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'',redirectTo:'bestseller',pathMatch:'full'},{path:"bestseller",component:BestsellerComponent},{path:"app",component:AppComponent},{path:"profile",component:ProfileComponent},{path:"categories",component:CategoriesComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
