import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  imports: [CommonModule],
  templateUrl: './tuberias.component.html',
  styleUrl: './tuberias.component.css'
})
export class TuberiasComponent {
  texto: string = 'mi primer pipe';
  cadenaTexto: string = 'Cadena de texto';
  numero: number = 2.718281828459045;
  moneda: number = 356.45;
  fechaActual: Date = new Date();
}
