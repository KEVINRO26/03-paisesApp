import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interface/pais.interface';

//Se acostumbra que cuando se haga peticiones http y trabajemos con data o objeto
//siempre es bueno poner el tipo
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

    //me sirve para traer solo los datos que necesito
    //para que la pagina no este muy pesada

  get httpParams(){
    return new HttpParams().set( 'fields', 'name,capital,population,ccn3,cca3,flags,cca2' )

  }
  
  
  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams });
      
    /* Otra manera de manejar errores
         
        .pipe( 
        catchError( err => of([ 'Erorr' ]))  retorna un arreglo 
      );

      */
  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url, {params: this.httpParams } );
  }

  getPaisPorAlpha( id: string ): Observable<Country>{

    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]>{


    

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, {params: this.httpParams } )
        .pipe( 
          tap( console.log )
        )
  }
  
}
