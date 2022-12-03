import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { BestsellingComponent } from './bestselling/bestselling.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ConsultationComponent,
    BestsellingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{path:'',redirectTo:'bestseller',pathMatch:'full'},{path:"bestseller",component:BestsellingComponent},{path:"app",component:AppComponent},{path:"consultation",component:ConsultationComponent},{path:"categories",component:CategoriesComponent}])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }







