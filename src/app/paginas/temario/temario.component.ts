import { Component } from '@angular/core';
import { TemasService } from '../../servicios/temas.service';
import { TemarioTarjetaComponent } from '../../temario-tarjeta/temario-tarjeta.component';
import { Tema } from '../../modelos/tema';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temario',
  imports: [TemarioTarjetaComponent, CommonModule],
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})

export class TemarioComponent {
  

  temas: Tema[] = [];
  totalLikes = 0;
  
  
  

  constructor(
    private route: ActivatedRoute,
    private temarioService: TemasService,
    
  ) {

  }

  ngOnInit(): void {
    this.getTemas();

    
    };
  

  getTemas(): void {
    this.temarioService.getTemas().subscribe((data: Tema[]) => {
      this.temas = data;
    });
  }

  

  actualizarLikes(nuevosLikes: number): void {
    
    this.totalLikes += nuevosLikes;
    

  }

  




}
