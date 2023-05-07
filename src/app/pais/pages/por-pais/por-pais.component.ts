import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;  //Para manejar error
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  // mostrar y ocultar sugerencias
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ){}

  
  buscar( termino: string ){

    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
 
    this.paisService.buscarPais( this.termino )
      .subscribe( (paises) => {
          console.log(paises);
          this.paises = paises;
      }, (err) => {
        this.hayError = true;
         //Para manejar el error cuando no hay paises
         this.paises = [];
      });

  }
  
  //Cuando escribo en el txt me aprescan las sugerencias
  sugerencias( termino: string ){
    
    this.hayError = false;
    this.termino = termino; //me va a permitir buscar por el nombre
    this.mostrarSugerencias = true;

    this.paisService.buscarPais( termino )
        .subscribe( 
          paises => this.paisesSugeridos = paises.splice(0,5),
          (err) => this.paisesSugeridos = []  
          //si el pais no exite me va a dar un arrelo vacio
          );
    
  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
    


  }

}
