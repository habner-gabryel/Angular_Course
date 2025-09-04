import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private contador: number = 0;
  
  incrementar() { this.contador++; }
  decrementar() { this.contador--; }
  getValor() { return this.contador; }
}
