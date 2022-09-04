import { AfterViewChecked, Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-componenta2',
  templateUrl: './componenta2.component.html',
  styleUrls: ['./componenta2.component.css']
})
export class Componenta2Component implements OnInit,  AfterViewChecked {

  version = VERSION.full

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    const start = (window as any)["start"] as number;
    console.log("processed web component 2 " + (new Date().getTime() - start) + "ms after start");
  }
}
