import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe],
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
