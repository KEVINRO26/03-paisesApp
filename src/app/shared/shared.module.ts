import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent, //se expota para poder utilizarlo en el app.module
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
