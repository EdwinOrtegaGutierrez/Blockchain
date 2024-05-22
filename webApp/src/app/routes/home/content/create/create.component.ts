import { Component } from '@angular/core';
import { NavbarComponent } from "../../../../components/navbar/navbar.component";
import { Router } from '@angular/router';
import { WebapiService } from '../../../../service/api/webapi.service';

interface Measurements {
    orchardLength:number, 
    orchardWidht:number, 
    squereLength:number, 
    squereWidth:number, 
    squeresLength:number, 
    squeresWidth:number,
    idUser:number
}

@Component({
    selector: 'app-create',
    standalone: true,
    templateUrl: './create.component.html',
    styleUrl: './create.component.css',
    imports: [NavbarComponent]
})

export class CreateComponent {

    constructor(private router: Router, private api:WebapiService) { }

    create(orchardLength:string, orchardWidht:string, squereLength:string, squereWidth:string, squeresLength:string, squeresWidth:string){
        let measurements:Measurements = {
            orchardLength:parseInt(orchardLength),
            orchardWidht:parseInt(orchardWidht),
            squereLength:parseInt(squereLength),
            squereWidth:parseInt(squereWidth),
            squeresLength:parseInt(squeresLength),
            squeresWidth:parseInt(squeresWidth),
            idUser:4
        }
        let values = Object.values(measurements).every(
            (value) => typeof value === 'number' && !isNaN(value)
        );
        
        let message = values ? `You have created an orchard with the following characteristics ${measurements}` 
                            : 'Some values are empty.';
        alert(message);
        
        if(values){


            // GUARDAR EN BASE DE DATOS
            this.api.createOrchard(measurements).subscribe(
                r => {
                    alert(r);
                },
                error => {
                    alert('Error al crear el huerto: ' + error);
                }
            );

            // GENERAR BLOQUE DE BLOCKCHAIN
            let bc = {
                "Author":"Edwin",
                "Content":{
                    "measurements":measurements
                }
            }
            

            this.api.newTransaction(bc).subscribe(
                r => {
                    alert(r);
                },
                error => {
                    console.error('Error al crear blockchain:', error);
                }
            );
            
            this.router.navigate(['/home']);
        }
    }
}
