import { Component, EventEmitter, Input, Output} from '@angular/core';

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
    
    
    this.contadorEnviar.emit(this.contador);
  }
    
  
}
