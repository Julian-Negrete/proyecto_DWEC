import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directivas',
  imports: [CommonModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  mostrarEjemplo = false;



  toggleEjemplo() {
    this.mostrarEjemplo = !this.mostrarEjemplo;
  }

  directivasContexto: string[] = [
    'ngIf',
    'ngFor',
    'ngSwitch',
    'ngPlural',
    'ngTemplate',
    'ngComponentOutlet'
  ];
}
