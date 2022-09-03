import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentaComponent } from './componenta/componenta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12element';
/*
  constructor(injector: Injector) {
    // Convert our sub-component it to a custom element.
    const el = createCustomElement(ComponentaComponent, { injector });
    // Register the custom element with the browser.
    // note, this is a different name than the one used in the selector of the component!
    // see also https://angular.io/guide/elements which recommends doing this.
    customElements.define('component-a', el);
  }
*/
}
