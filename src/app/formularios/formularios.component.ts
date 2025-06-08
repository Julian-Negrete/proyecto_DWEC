import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../modelos/tema';
import { TemasService } from '../servicios/temas.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css'],
  imports: [FormsModule]
})
export class FormulariosComponent implements OnInit {
  tema: Tema = { titulo: '', contenido: '', puntuacion: 0, autor: '', duracion: 0 };
  editando = false;

  constructor(
    private temasService: TemasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {

      this.temasService.getTemaPorId(+id).subscribe((data: Tema | undefined) => {
        if (data) {
          this.tema = { ...data };
          this.editando = true;
        }
      });
    }
  }

  guardar(): void {
    if (this.editando) {
      this.temasService.actualizarTema(this.tema).subscribe(() => {
        this.router.navigate(['/temario']);
      });
    } else {
      this.temasService.agregarTema(this.tema).subscribe(() => {
        this.router.navigate(['/temario']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/temario']);
  }
}
