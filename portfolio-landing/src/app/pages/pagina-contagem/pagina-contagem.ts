import { Component } from '@angular/core';
import { Contador } from "../../component/contador/contador";

@Component({
  selector: 'app-pagina-contagem',
  imports: [Contador],
  templateUrl: './pagina-contagem.html',
  styleUrl: './pagina-contagem.scss'
})
export class PaginaContagem {
  valor: number = 0;


  incrementar(): void {
    this.valor++;
  }

  decrementar(): void {
    this.valor--;
  }

}
