import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li {
      cursor: pointer; 
      /* esto nos ayudara solo a cambiar el html de esta clase */
      /* es para que apreserca la manito cuando pasemos el mouse */
    }
    `
  ]
 
})
export class SidebarComponent {

}
