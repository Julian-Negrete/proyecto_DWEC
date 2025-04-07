import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../servicios/temas.service'; // Asegúrate de importar el servicio
import { Observable } from 'rxjs';
import { TemarioTarjetaComponent } from '../../temario-tarjeta/temario-tarjeta.component';
import { Tema } from '../../modelos/tema';
import { CommonModule } from '@angular/common';
import { TEMARIO } from '../../datos/datostemario.json';

@Component({
  selector: 'app-temario',
  imports: [TemarioTarjetaComponent, CommonModule],
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})

export class TemarioComponent{
  temas: Tema[]=TEMARIO;

  constructor(private temasService: TemasService) {}


}
