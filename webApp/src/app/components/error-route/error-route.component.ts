import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-error-route',
    standalone: true,
    templateUrl: './error-route.component.html',
    styleUrl: './error-route.component.css',
    imports: [NavbarComponent]
})
export class ErrorRouteComponent {
    image:string = '../../../assets/images/baymax_sad.png'
}
