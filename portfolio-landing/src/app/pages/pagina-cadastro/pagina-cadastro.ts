import { Component } from '@angular/core';
import { Formulario } from "../../component/formulario/formulario";
import { Usuario } from '../../model/usuario';
import { Botao } from "../../component/botao/botao";

@Component({
  selector: 'app-pagina-cadastro',
  imports: [Formulario, Botao],
  templateUrl: './pagina-cadastro.html',
  styleUrl: './pagina-cadastro.scss',
  standalone: true
})
export class PaginaCadastro {
  ultimoUsuario: Usuario | null = null;

  processarDados(usuario: Usuario) {
    console.log("Dados recebidos: ", usuario);
  }

  limparDados() {
    console.log("Dados limpos");
    this.ultimoUsuario = null;
  }

}
