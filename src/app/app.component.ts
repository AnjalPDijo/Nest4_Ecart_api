import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { NavbarComponent } from './units/navbar/navbar.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './units/footer/footer.component';
import { NocomponentComponent } from './pages/nocomponent/nocomponent.component';
import { SingleComponent } from './pages/single/single.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavbarComponent,ProductsComponent,FooterComponent,HomeComponent,ContactComponent,NocomponentComponent,SingleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ECart';
  data: any=[]
  slice: any;
constructor(public api:ApiService){}
ngOnInit()
{
  this.api.getdata().subscribe(response=>{
    this.data=response
  })
}
}
