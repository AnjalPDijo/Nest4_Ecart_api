import { Component } from '@angular/core';
import { NavbarComponent } from "../../units/navbar/navbar.component";
import { FooterComponent } from "../../units/footer/footer.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class ContactComponent {

}
