import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-componenta',
  templateUrl: './componenta.component.html',
  styleUrls: ['./componenta.component.css']
})
export class ComponentaComponent implements OnInit {

  version = VERSION.full

  constructor() { }

  ngOnInit(): void {
  }

}
