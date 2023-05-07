import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;  //Para manejar error
  paises: Country[] = [];

  constructor( private paisService: PaisService ){}

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
 
    this.paisService.buscarCapital( this.termino )
      .subscribe( (paises) => {
          console.log(paises);
          this.paises = paises;
      }, (err) => {
        this.hayError = true;
         //Para manejar el error cuando no hay paises
         this.paises = [];
      });

  }

  sugerencias( termino: string ){
    this.hayError = false;
    
  }

}
