import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Tema } from '../modelos/tema';


@Injectable({
  providedIn: 'root'
})
export class TemasService {

  /*private temasUrl = 'app/datos/datostemario.json.ts'; 

  constructor(private http: HttpClient) { }

  
  getTemas(): Observable<any[]> {
    return this.http.get<any[]>(this.temasUrl);
  }*/

    httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    };
  
    private temasUrl = 'api/temas'
    constructor(private http: HttpClient) { }
  
    getTemas(): Observable<Tema[]> {
      const temas = this.http.get<Tema[]>(this.temasUrl).
        pipe(
          tap(_ => this.log('Temas cargados')),
          catchError(this.handleError<Tema[]>('getTemas', [])));
      return temas;
    }
  
    /** Método de log para los mensajes de la aplicación */
    private log(message: string) {
      console.log(`TemarioService: ${message}`);
    }
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // Envía el error a la consola
        console.error(error);
        // Envía el error formateado al usuario
        this.log(`${operation} failed: ${error.message}`);
        // La aplicación sigue en funcionamiento
        return of(result as T);
      };
    }
}
