import { Component } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent {
  constructor(private Server:ProductService){}

  SendSelectedCategory( Category:string){
    console.log(Category);
    this.Server.RecieveSelectedCategoryName(Category);
    //Backendcall

  }

}
