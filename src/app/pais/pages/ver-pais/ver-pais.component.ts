import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

//switchMap  es un operador de tranformacion, permite obtener un 
//observable y regresar otro observable

//tap es un operador que dispara efecto secundario

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  //hacemos que confie en nosotros con ! xd
 pais: Country[] = [];

  //sirve para suscribirnos a cualquier cambio de la url

  //proporciona información sobre la ruta activada en un momento dado. Permite acceder a los parámetros de la 
  // URL, los datos de ruta, los fragmentos  y otros detalles relacionados con la ruta actual.
  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
     ){}

  ngOnInit(): void { 
    //dentro del pipe se puede especificar cualquier cantidad de operadores
    this.activatedRoute.params
      .pipe( 
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id ) ),
        tap( console.log )
      )
      .subscribe(  pais => this.pais = pais );
      
      
//     this.activatedRoute.params //leemos los parametos
//     .subscribe( ({ id }) => {
//       console.log(id); //extraemos el id
//se suscribe para obtener informacion 

//       this.paisService.getPaisPorAlpha( id )
//         .subscribe( pais => {
//           console.log(pais);
//         });

//     });
  }

}
