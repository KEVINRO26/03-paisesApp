import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,  //para usarlo recordar que debe estar importado en AppModule
        // exportado desde desde su respectivo modulo

        pathMatch: 'full' //indica que la ruta definida en el enrutador debe coincidir exactamente con la URL completa, 
                          //incluyendo cualquier parámetro de consulta o fragmento de URL.
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule //es buenas practica exportalos
    ]
})

export class AppRoutingModule { }