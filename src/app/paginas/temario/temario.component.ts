import { Component } from '@angular/core';
import { TemasService } from '../../servicios/temas.service';
import { TemarioTarjetaComponent } from '../../temario-tarjeta/temario-tarjeta.component';
import { Tema } from '../../modelos/tema';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-temario',
  imports: [TemarioTarjetaComponent, CommonModule, FormsModule, RouterModule],
  templateUrl: './temario.component.html',
  styleUrl: './temario.component.css'
})

export class TemarioComponent {
  

  temas: Tema[] = [];
  totalLikes = 0;
  busqueda: string = '';
  
  
  

  constructor(
    private route: ActivatedRoute,
    private temarioService: TemasService,
    private router: Router
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


  temasFiltrados(): Tema[] {
    return this.temas.filter(t =>
      t.titulo.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  nuevoTema(): void {
    this.router.navigate(['/formulario']);
  }
  




}
