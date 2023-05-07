import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {  debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {


 
  //se utiliza para emitir eventos desde un componente hijo hacia un componente padre.
  // el componente hijo puede enviar datos o notificar eventos al componente padre. 
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  //se va a emitir cuando la persona deje de escribir 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  //para que el placeholder tenga su respectivo nombre
  @Input() placeholder: string = '';

  //es un observable de rxjs
  debouncer: Subject<string> = new Subject;

  termino: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    });

  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  //se emite cada vez que toque una tecla
  teclaPresionado( ){
    this.debouncer.next( this.termino );
  }

}
