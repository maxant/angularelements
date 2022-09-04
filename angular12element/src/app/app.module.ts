import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Componenta2Component } from './componenta/componenta2.component';

@NgModule({
  declarations: [
    AppComponent,
    Componenta2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, Componenta2Component],
  entryComponents: [
    Componenta2Component
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(Componenta2Component, { injector });
    customElements.define('component-a2', el);
  }
  ngDoBootstrap() {}
}
