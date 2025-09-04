import { Component } from '@angular/core';
import { Contador } from "../../component/contador/contador";
import { ContadorService } from '../../services/contador-service';
import { Contador1 } from "../../component/contador-1/contador-1";
import { Contador2 } from "../../component/contador-2/contador-2";

@Component({
  selector: 'app-pagina-contagem',
  imports: [Contador1, Contador2],
  templateUrl: './pagina-contagem.html',
  styleUrl: './pagina-contagem.scss'
})
export class PaginaContagem {

  constructor(private contadorService: ContadorService) {}


  apresentarValor(): number {
    return this.contadorService.getValor();
  }

}
