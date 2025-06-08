import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap, BehaviorSubject } from 'rxjs';
import { Tema } from '../modelos/tema';


@Injectable({
  providedIn: 'root'
})



export class TemasService {

  private temasSubject = new BehaviorSubject<Tema[]>([]);
  temas$ = this.temasSubject.asObservable();

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

  temas: Tema[] = [];
  getTemaPorId(id: number): Observable<Tema | undefined> {
    const temas = this.http.get<Tema>(`${this.temasUrl}/${id}`).
      pipe(
        tap(_ => this.log('Temas cargados')),
        catchError(this.handleError<Tema>('getTemas', undefined)));
    return temas;
  }

  agregarTema(nuevoTema: Tema) : Observable<Tema> {
    return this.http.post<Tema>(this.temasUrl, nuevoTema, this.httpOptions)
      .pipe(
        tap((tema: Tema) => this.log(`Tema agregado con id=${tema.id}`)),
        catchError(this.handleError<Tema>('agregarTema'))
      );
    
  }

  actualizarTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${this.temasUrl}/${tema.id}`, tema, this.httpOptions)
      .pipe(
        tap((tema: Tema) => this.log(`Tema actualizado con id=${tema.id}`)),
        catchError(this.handleError<Tema>('actualizarTema'))
      );
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
