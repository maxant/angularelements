import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentaComponent } from './componenta/componenta.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, ComponentaComponent],
  entryComponents: [
    ComponentaComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(ComponentaComponent, { injector });
    customElements.define('component-a', el);
  }
  ngDoBootstrap() {}
}
