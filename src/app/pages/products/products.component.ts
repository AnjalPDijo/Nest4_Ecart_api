import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../units/navbar/navbar.component";
import { ApiService } from '../../api.service';
import { FooterComponent } from "../../units/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [SlicePipe, NavbarComponent, FooterComponent,RouterLink]
})
export class ProductsComponent {
  title = 'ECart';
  data: any=[];
  slice: any;
constructor(public api: ApiService){}
ngOnInit()
{
  this.api.getdata().subscribe(response=>{
    this.data=response
  })
}


}
