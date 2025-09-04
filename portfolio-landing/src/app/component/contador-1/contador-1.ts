import { Component } from '@angular/core';
import { ContadorService } from '../../services/contador-service';
import { Botao } from "../botao/botao";

@Component({
  selector: 'app-contador-1',
  imports: [Botao],
  templateUrl: './contador-1.html',
  styleUrl: './contador-1.scss'
})
export class Contador1 {
  constructor(private contadorService: ContadorService) {}

  incrementar() {
    this.contadorService.incrementar();
  }
}
