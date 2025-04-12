import { Component, OnInit } from '@angular/core';
import { TemasService } from '../../servicios/temas.service';
import { Observable } from 'rxjs';
import { TemarioTarjetaComponent } from '../../temario-tarjeta/temario-tarjeta.component';
import { Tema } from '../../modelos/tema';
import { CommonModule } from '@angular/common';
import { TEMARIO } from '../../datos/datostemario.json';
import { ActivatedRoute } from '@angular/router';
import { ContadorService } from '../../contador.service';

@Component({
  selector: 'app-temario',
  imports: [TemarioTarjetaComponent, CommonModule],
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})

export class TemarioComponent {
  /*temas: Tema[]=TEMARIO;

  constructor(private temasService: TemasService) {}*/

  temas: Tema[] = [];
  totalLikes = 0;
  /*contador = 0;*/
  
  

  constructor(
    private route: ActivatedRoute,
    private temarioService: TemasService,
    /*private contadorService: ContadorService*/
  ) {

  }

  ngOnInit(): void {
    this.getTemas();

    /*this.contadorService.contador$.subscribe(valor => {
      this.totalLikes = valor;*/
    };
  

  getTemas(): void {
    this.temarioService.getTemas().subscribe((data: Tema[]) => {
      this.temas = data;
    });
  }

  

  actualizarLikes(nuevosLikes: number): void {
    console.log('Nuevo like recibido:', nuevosLikes);
    this.totalLikes += nuevosLikes;
    console.log('Total likes actualizados:', this.totalLikes);

  }

  




}
