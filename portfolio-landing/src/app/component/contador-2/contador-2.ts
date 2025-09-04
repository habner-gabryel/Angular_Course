import { Component } from '@angular/core';
import { ContadorService } from '../../services/contador-service';
import { Botao } from "../botao/botao";

@Component({
  selector: 'app-contador-2',
  imports: [Botao],
  templateUrl: './contador-2.html',
  styleUrl: './contador-2.scss'
})
export class Contador2 {
  constructor(private contadorService: ContadorService) {}

  decrementar(): void{
    this.contadorService.decrementar();
  }
}
