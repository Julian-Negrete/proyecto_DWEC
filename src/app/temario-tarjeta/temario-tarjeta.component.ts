import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-temario-tarjeta',
  imports: [],
  templateUrl: './temario-tarjeta.component.html',
  styleUrl: './temario-tarjeta.component.css'
})
export class TemarioTarjetaComponent {
  @Input() tema: any;
  contador: number = 0;

  meGusta(){
    this.contador++;
  }
}
