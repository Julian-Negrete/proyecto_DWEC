import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-temario-tarjeta',
  imports: [],
  templateUrl: './temario-tarjeta.component.html',
  styleUrl: './temario-tarjeta.component.css'
})
export class TemarioTarjetaComponent {
  @Input() tema: any;
  contador: number = 1;

  @Output() contadorEnviar = new EventEmitter<number>();
  
  meGusta(){
    /*this.contador++;*/
    console.log('Contador actual:', this.contador);
    this.contadorEnviar.emit(this.contador);
  }
    /*constructor(private contadorService: ContadorService) {}

    sumar() {
      this.contadorService.incrementar();
    }*/
  
}
