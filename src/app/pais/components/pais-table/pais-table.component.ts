import { Component, Input } from '@angular/core';
import { Country } from '../../interface/pais.interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html'
})
export class PaisTableComponent {

  @Input() paises: Country[] = []; //se utiliza para recibir componentes padre a un componente hijo
  // el componente hijo puede recibir valores desde el componente padre.

  constructor(){}

}
